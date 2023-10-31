# ieee-mailer
## Steps to setup from scratch
- install wsl by running `wsl --install -d Ubuntu` in powershell with admin privelages and reboot your system after installation
- open powershell and run `wsl` to get into wsl
- to install node, run: <br>
`cd; curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`
- copy and paste the last 3 lines(starts with export) in terminal
- to setup node, run: <br>
`nvm install v20.4.0`
- to install and run ieee-mailer, run:
  ```
  git clone https://github.com/TarushS/ieee-mailer && cd ieee-mailer
  npm i
  node index.js```
- edit index.js to your preference

## To setup google account app password
- enable 2factor-auth in google account (account.google.com)
- search app password and create a password and put it in index.js pass field
