# GPBS Portal — Deployment Notes

Static launcher page on `ibsdo.com`. **Frontend only** — no backend, no
database, no PM2, no API proxy. Apache just serves the built files. Nothing in
gpbs-pms or true-visions changes; the portal gets its own URL path and web root.

## Allocation summary

| Item | Value |
|---|---|
| Frontend URL | `https://ibsdo.com/gpbs-portal/` |
| Web root (Apache serves from) | `/var/www/html/gpbs-portal/` |
| Git checkout (SSH, optional) | `/home/kittinv/gpbs-portal/` |
| GitHub repo (optional) | `https://github.com/Kittinske15/gpbs-portal.git` |
| Backend / DB / PM2 | none — static site |

The `homepage` field in `package.json` is already set to `/gpbs-portal`, so the
build's asset paths match the URL above. If you change the URL path, change
`homepage` and rebuild.

## 1. Build on your dev machine

```powershell
cd "C:\Users\WINDOWS 11\Desktop\BSDO Work Coding\gpbs-portal"
npm install      # first time only
npm run build    # outputs to .\build\
```

## 2. Get the files onto the server

Pick ONE of these.

### Option A — Git (matches the gpbs-pms workflow, best for re-deploys)

On your dev machine, commit and push (including the `build/` folder), then on
the server:

```bash
cd /home/kittinv
git clone https://github.com/Kittinske15/gpbs-portal.git
```

### Option B — Direct copy (no repo, simplest for a static site)

From your dev machine, copy the build straight up over SSH:

```powershell
scp -r build kittinv@ibsdo.com:/home/kittinv/gpbs-portal-build
```

## 3. Apache: serve the folder

Edit (with sudo) the existing SSL vhost for `ibsdo.com` and add inside
`<VirtualHost *:443>` — this is the ONLY Apache change needed (no ProxyPass,
unlike gpbs-pms):

```apache
Alias /gpbs-portal /var/www/html/gpbs-portal
<Directory /var/www/html/gpbs-portal>
    Options -Indexes +FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```

Then:

```bash
sudo apache2ctl configtest
sudo systemctl reload apache2
```

## 4. Copy the build into the web root

```bash
sudo mkdir -p /var/www/html/gpbs-portal

# if you used Option A (git clone):
sudo cp -r /home/kittinv/gpbs-portal/build/. /var/www/html/gpbs-portal/

# if you used Option B (scp):
sudo cp -r /home/kittinv/gpbs-portal-build/. /var/www/html/gpbs-portal/

sudo chown -R www-data:www-data /var/www/html/gpbs-portal
```

## 5. Smoke test

- Open `https://ibsdo.com/gpbs-portal/` — should show the GPBS Portal hero,
  search box, filter pills, and the system tiles.
- Click a "Live" tile (e.g. GPBS PMS) — should open that system in a new tab.

## Re-deploy after an update

On your dev machine:

```powershell
cd "C:\Users\WINDOWS 11\Desktop\BSDO Work Coding\gpbs-portal"
npm run build
git add .
git commit -m "..."
git push
```

On the server (Option A):

```bash
cd /home/kittinv/gpbs-portal
git pull
sudo cp -r build/. /var/www/html/gpbs-portal/
```

Or, without a repo (Option B), just re-run the `scp` + `cp` from steps 2 and 4.
No PM2 restart — there's no backend to restart.
