# Shades of Purple - Spotify theme

## Screenshots

![shades-of-purple-screenshot](screenshot.png)

## Requirements
The theme needs [spicetify](https://github.com/khanhas/spicetify-cli) in order to be installed.

## Installation

Just run these commands on a terminal:

```bash
git clone https://github.com/theRealPadster/shades-of-purple-spotify-theme
mv shades-of-purple-spotify-theme ~/.config/spicetify/Themes/
spicetify config current_theme shades-of-purple-spotify-theme
spicetify apply
```

## Development

* Run `spicetify watch` to keep Spicetify updating when CSS files change
* Run `gulp watch` to live convert less to css
* Edit the less files in the `src` directory

## Credits
* Colour scheme inspired by the [Shades of Purple VSCode theme](https://github.com/ahmadawais/shades-of-purple-vscode)
* Git repo and code starting point based on [Arc-Dark Spotify Theme](https://github.com/meliot/Arc-Dark-Spotify-Theme)
