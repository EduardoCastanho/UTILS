# DEV MACHINE FEDORA

## htop

```bash
sudo install htop
```

## google-chrome

```bash
 sudo dnf config-manager --set-enabled google-chrome
 sudo dnf install google-chrome-stable
 
```

## Nerd Fonts

### Download

- Fira code <https://github.com/ryanoasis/nerd-fonts/releases/download/v3.3.0/FiraCode.zip>
- Meslo <https://github.com/ryanoasis/nerd-fonts/releases/download/v3.3.0/Meslo.zip>

### Install

unzip e copy para : ~/.local/share/fonts

Reload fonts

`fc-cache -fv`

## Fish shell + starship

### Fish

```bash
sudo dnf install fish
chsh -s /usr/bin/fish
```

### [starship](https://starship.rs/guide/)

```bash
dnf copr enable atim/starship
dnf install starship
starship init fish | source
```

## Dolphin (file explorer)

- Adicionar a '/'  ao places

- Adicionar botao subir

## Thunderbird

### Exportar do antigo e importar

### Copiar imagem ipma para a assinatura

### Instalar Extensões

- Language tool - verificação ortografica e gramátical
- awesome Emoji Picker - porque sim :D
- minimize on close- para evitar feacher o mail
- conversations - linhas de conversa

### Martelar as configurações por causa do perseus estar estupidamente desactualizado

settings -> procurar por "Config Editor"-> tls-> deprecatred e min version

### Para alem disso ... :rage:

```bash
sudo update-crypto-policies --set LEGACY
```

## Pycharm

Activar licensa e ligar o backup sync que fica tudo pronto
