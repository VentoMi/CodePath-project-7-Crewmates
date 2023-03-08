# Web Development Project 1 - *Community Board*

Submitted by: **Milton Vento**

This web app: **Community board that displays information about upcoming events at the Williams College 62' Center for Theator and Dance**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **There is a unique theme for events or resources relevant to a specific community**
- [c] **At least 10 unique resources or events are displayed in a responsive card format**

The following **optional** features are implemented:

- [x] Buttons or links to a related resources are on each card component
- [x] The site is responsive for both desktop and mobile formats

The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

- I struggled with adding images to the cards, before finally learning that they should be added to the 'public' folder or imported if added in the 'src' folder. 
- I had a challenge with adding the background image in the header. Even though it was in the public folder, it was not being rendered and I had to use css to add the image instead of HTML (the address seemed correct and I also experimented with it a number of times but to no avail)
- During the initial stags, after deleting the react stater code, the page was not displaying any content. This was an issue with the render import statement and when I changed this to allow {render} to be imported from react-dom rather than react the code worked.

## License

    Copyright [2013] [Milton Vento]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.