# kNote

kNote is a Progressive Web App (PWA) built with Quasar Framework, designed for note-taking and personal organization. It works offline, allowing users to manage their notes seamlessly, whether they are connected to the internet or not.

## Features

- **Offline Support**: Access and manage your notes without an internet connection.
- **User-friendly Interface**: Intuitive design for easy note creation and organization.
- **Progress Saving**: Automatic saving of notes to prevent data loss.
- **Responsive Design**: Works on both desktop and mobile devices.

## Installation

Clone -> Navigate -> Install:

```bash
git clone https://github.com/your-username/knote_quasar_pwa.git
cd knote_quasar_pwa
npm install
```

## Usage

To start the development server, run:

```bash
npm run serve
```

Visit `http://localhost:9000` in your browser to access the app and start using kNote.

## Deployment

To deploy the application on GitHub Pages, follow these steps:

1. Build the project:
```bash
npm run build
```

2. Navigate to the `dist/spa` directory:
```bash
cd dist/spa
```

3. Use the `gh-pages` branch to deploy:

```bash
git init
git add -A
git commit -m 'deploy'
git branch -M gh-pages
git remote add origin https://github.com/your-username/knote_quasar_pwa.git
git push -f origin gh-pages
```

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. Contributions are welcome and appreciated!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the Quasar Framework for providing a powerful tool for building Progressive Web Apps (PWAs).
- Special thanks to all contributors who have helped improve the project.