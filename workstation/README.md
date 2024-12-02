# DEV MACHINE FEDORA

## Rede

_**wired**_

|Parameter|Value             |
|---------|------------------|
|dns      | `180.180.0.12`   |
|ip       | `192.168.54.101` |
|netmask  | `255.255.255.0`|
|gateway  | `192.168.54.254` |

_**wireless**_

|Parameter|Value             |
|---------|------------------|
| name    |IPMA-GUEST        |
| pass    |Ipma@202303       |

 _**VPN - Checkpoint**_

> snx_install_linux30.sh - Não está a funcionar no Fedora 41 ...

 **snx-rs**

<https://github.com/ancwrd1/snx-rs>

 download ficheiro para `/opt`

```sh
mkdir ~/.config/sns-rs
cp SNX_VPN_IPMA/snx-rs.conf ~/.config/sns-rs
cd /opt
extract snx-rs-v?.?.?-linux-x86_64.tar.xz
mv snx-rs-v?.?.?-linux-x86_64/ snx-rs
```

`cipma` para ligar

_**Problemas com o DNS...forçar o DNS do IPMA sempre**_

```bash
sudo -i
mkdir /etc/systemd/resolved.conf.d
cp /usr/lib/systemd/resolved.conf /etc/systemd/resolved.conf.d/override1.conf
```

Adicionar ao ficheiro :

```conf
DNS=180.180.0.12 # ipma dns 
FallbackDNS=8.8.8.8 # google dns 
```

## ssh

1. copiar a chave e o config (basicamente a pasta .ssh)
2. Ajustar permissoes

## Discos Remotos

1. `mkdir /CASHARE /celsius`  mount points

2. adicionar ao fstab

```fstab
//180.180.70.80/divca               /CASHARE    cifs        x-systemd.automount,noauto,user,uid=castanho,username=user,password=share.divca,iocharset=utf8,vers=1.0,noperm  0 0 
celsius.ipma.pt:/data/cevada/OUT    /celsius    nfs         auto,nofail,noatime,nolock,intr,tcp,actimeo=1800    0 0
```

## Instalar

```sh
sudo dnf config-manager --set-enabled google-chrome
dnf copr enable atim/starship
sudo dnf install htop qgis eza vim java-21-openjdk fish starship google-chrome-stable keepassxc thunderbird
```

### SHELL

#### Nerd Fonts

1. Download
   - Fira code <https://github.com/ryanoasis/nerd-fonts/releases/download/v3.3.0/FiraCode.zip>
   - Meslo <https://github.com/ryanoasis/nerd-fonts/releases/download/v3.3.0/Meslo.zip>
2. Install
    unzip e copy para : ~/.local/share/fonts
3. Reload fonts `fc-cache -fv`

#### Visual studio code

1. Através do repo descrito em  [vscode](https://code.visualstudio.com/docs/setup/linux#_rhel-fedora-and-centos-based-distributions)
2. ligar o backup sync
3. mudar a font para "FiraCode Nerd Font"

#### fish + starship

```sh
chsh -s /usr/bin/fish
echo "starship init fish | source" >> $HOME/.config/fish/config.fish
cp FISH_STARSHIP/starship.toml ~/config/
cp FISH_STARSHIP/functions/*.fish  ~/.config/fish/functions/
```

#### Dolphin (file explorer)

- Adicionar '/' ao places
- Adicionar botao subir a barra

#### Keepassxc

```sh
cp  OTHER/Passords.kdbx ~/.config/Passwords.kdbx
```

> _Associar ficheiro na app_
>
#### Panoply

> _Tem que ter instalado a jdk previamente_.
>
> _Usar versão antiga que representa corretamente a projeção metrica recomendada pela DGT._

```sh
cd /opt
cp ~/UTILS/panoply/PanoplyJTRANSVERSEMERCATOR.tar.gz /opt
extract PanoplyJTRANSVERSEMERCATOR.tar.gz
rm PanoplyJTRANSVERSEMERCATOR.tar.gz
sudo ln -s /opt/PanoplyJ/panoply.sh /usr/local/bin/panoply
sudo desktop-file-install ~/UTILS/panoply/panoply.desktop
sudo update-desktop-database
```

#### Docker

1. Seguir <https://docs.docker.com/engine/install/fedora/>

2. adicionar o ficheiro /etc/docker/daemon.json

```json
{
  "bip": "172.27.0.1/24",
  "default-address-pools": [
        {"base":"172.27.0.0/16","size":16},
        {"base":"172.28.0.0/16","size":16},
        {"base":"172.29.0.0/16","size":16},
        {"base":"172.30.0.0/16","size":16},
        {"base":"172.31.0.0/16","size":16},
        {"base":"172.32.0.0/16","size":16},
        {"base":"172.33.0.0/16","size":16},
        {"base":"172.34.0.0/16","size":16},
        {"base":"172.35.0.0/16","size":16},
        {"base":"172.36.0.0/16","size":16},
        {"base":"172.37.0.0/16","size":16},
        {"base":"172.38.0.0/16","size":16},
        {"base":"172.39.0.0/16","size":16},
        {"base":"172.40.0.0/16","size":16},
        {"base":"192.168.0.0/16","size":20}   
  ]
}
```

#### Thunderbird

1. Exportar do antigo e importar o zip
2. Copiar imagem ipma para a assinatura `cp OTHER/H2_IPMA_CMYK.png ~/.config/`
3. Extensões:
   - Language tool - verificação ortografica e gramatical
   - awesome Emoji Picker - porque sim :D
   - minimize on close- para evitar fechar o mail sem querer
   - conversations - linhas de conversa
4. Martelar as configurações por causa do perseus estar estupidamente desatualizado
    > settings -> procurar por "Config Editor"-> tls-> deprecated e min version

5. Para alem disso ... :rage:

    ```bash
    sudo update-crypto-policies --set LEGACY
    ```

## Pycharm

<https://www.jetbrains.com/pycharm/download/?section=linux>

Ativar licença e ligar o backup sync que fica tudo pronto
