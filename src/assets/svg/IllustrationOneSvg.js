import * as React from 'react';
import Svg, {G, Path, Circle, Ellipse, Defs, ClipPath} from 'react-native-svg';

const IllustrationOneSvg = (props) => (
  <Svg width={375} height={321} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G clipPath='url(#a)'>
      <Path
        d='M78.5 191.5c9.411 42.907-14.057 78.911 22 104 29 20.179 114.5 18.25 152 14.5 25.975-2.598 32.937-44.195 46.5-66.5 18.161-29.866 31.889-40.051 32.5-75 .761-43.553-18.438-67.508-48-99.5-20.004-21.648-5.311-40.388-33.5-49-37.162-11.353-62.357-11.414-99.5 0C116.587 30.422 97.31 42.254 74 69c-35.703 40.966-7.143 69.421 4.5 122.5Z'
        fill='#F6F8FB'
      />
      <Path
        opacity={0.2}
        d='M43.915 176.237c-12.7-1.681-9.636-11.884-17.017-19.99-7.38-8.106 25.424-10.399 38.154 2.82 12.729 13.22 4.496-2.118 2.515-7.332-1.98-5.215 23.433 7.822 24.47 19.925 1.038 12.103 11.996 11.219 9.986-5.534s14.883 13.631 17.594 28.658c2.712 15.027 6.598.516 5.852-11.16-.747-11.676 13.854 19.015 7.285 30.038-6.569 11.023 5.619 11.489 12.616.176 6.996-11.313 3.037 11.369-8.73 26.236s5.482 12.208 12.89-1.259c7.407-13.467 10.956 40.039-17.525 45.018-.799.14-8.232-23.025-9.015-22.927-.998.125 4.657 23.5 3.686 23.56-25.431 1.596-41.245-17.972-30.457-19.743 11.522-1.892 13.163-2.695 6.859-10.595-6.304-7.901-27.86-6.064-15.722-11.187 12.14-5.123 18.6-3.889 8.86-11.33-9.74-7.44-37.794-2.751-18.936-9.94 18.858-7.188 12.57-13.225 2.262-11.845-10.309 1.38-31.17-.82-20.734-2.471 19.18-3.034 20.728-22.828 10.416-13.636-10.312 9.192-44.598-2.191-29.792-5.689 14.805-3.497 17.184-10.112 4.483-11.793Z'
        fill='#208153'
      />
      <Path
        d='M45.275 169.115c-12.7-1.681-9.636-11.885-17.017-19.991-7.38-8.105 25.424-10.399 38.153 2.821 12.73 13.219 4.497-2.118 2.516-7.332-1.98-5.215 23.433 7.822 24.47 19.925 1.038 12.103 11.996 11.219 9.986-5.534s14.883 13.631 17.594 28.658c2.711 15.027 6.598.515 5.851-11.16-.747-11.676 13.855 19.015 7.286 30.037-6.569 11.023 5.619 11.49 12.616.177 6.996-11.313 3.037 11.369-8.73 26.236-11.767 14.866 5.482 12.207 12.89-1.26 7.407-13.467 10.956 40.04-17.525 45.019-.799.139-8.232-23.026-9.015-22.928-.999.125 4.657 23.5 3.686 23.561-25.431 1.595-41.245-17.972-30.458-19.743 11.523-1.893 13.164-2.695 6.86-10.596-6.304-7.9-27.861-6.063-15.722-11.186 12.139-5.123 18.6-3.89 8.86-11.33-9.74-7.44-37.794-2.752-18.936-9.94 18.858-7.188 12.57-13.225 2.262-11.845-10.309 1.38-31.171-.82-20.735-2.471 19.181-3.034 20.729-22.829 10.417-13.636-10.312 9.192-44.598-2.191-29.793-5.689 14.806-3.498 17.184-10.112 4.484-11.793Z'
        fill='#29CB7E'
      />
      <Path
        opacity={0.1}
        d='M150.89 231.692c7.407-13.467 10.956 40.04-17.525 45.019 0 0-13.986-57.793-38.365-84.711-20.796-22.962-66.742-42.876-66.742-42.876s25.424-10.399 38.153 2.821c12.73 13.219 4.497-2.118 2.516-7.332-1.98-5.215 23.433 7.822 24.47 19.925 1.038 12.103 11.996 11.219 9.986-5.534s14.883 13.631 17.594 28.658c2.711 15.027 6.598.515 5.851-11.16-.747-11.676 13.855 19.015 7.286 30.037-6.569 11.023 5.619 11.49 12.615.177 6.997-11.313 3.038 11.369-8.729 26.236-11.768 14.866 5.482 12.207 12.89-1.26Z'
        fill='#000'
      />
      <Path
        opacity={0.2}
        d='M308.302 185.126c9.708-2.874 6.061-10.463 10.826-17.699 4.766-7.235-21.125-4.991-29.437 6.893-8.312 11.885-3.771-1.1-2.866-5.414.905-4.314-17.331 8.988-16.652 18.564.678 9.576-7.985 10.233-8.476-3.093-.491-13.325-9.942 12.471-10.211 24.535-.269 12.065-5.088 1.214-5.94-7.992-.853-9.207-8.478 16.547-1.995 24.345 6.484 7.797-2.973 9.66-9.826 1.689-6.853-7.972-.974 9.248 10.041 19.407 11.014 10.159-2.779 10.204-10.218.602-7.438-9.602-3.63 32.604 19.216 32.989.642.011 3.595-18.987 4.219-19.007.795-.025-.746 18.918.02 18.846 20.049-1.882 29.987-19.101 21.349-19.158-9.228-.06-10.608-.485-6.658-7.428 3.95-6.942 21.004-8.159 10.898-10.666-10.107-2.506-14.999-.749-8.31-7.755s29.166-6.795 13.56-10.088c-15.605-3.292-11.439-8.778-3.222-8.969 8.217-.19 24.233-4.472 15.883-4.478-15.347-.01-18.989-15.272-9.809-9.364 9.181 5.907 34.546-7.194 22.558-8.104-11.987-.911-14.658-5.782-4.95-8.655Z'
        fill='#208153'
      />
      <Path
        d='M305.873 179.888c9.708-2.873 6.061-10.462 10.827-17.698 4.765-7.235-21.126-4.992-29.438 6.893-8.312 11.885-3.771-1.1-2.866-5.414.905-4.315-17.331 8.987-16.652 18.563.678 9.576-7.985 10.234-8.476-3.092-.491-13.326-9.942 12.471-10.211 24.535-.269 12.064-5.088 1.214-5.94-7.992-.853-9.207-8.478 16.547-1.994 24.344 6.483 7.798-2.974 9.661-9.827 1.689-6.853-7.971-.973 9.249 10.041 19.408 11.014 10.159-2.779 10.204-10.217.602-7.439-9.602-3.63 32.604 19.216 32.989.641.01 3.595-18.987 4.218-19.007.795-.025-.746 18.918.02 18.846 20.049-1.882 29.988-19.101 21.349-19.158-9.228-.06-10.608-.485-6.658-7.428 3.95-6.942 21.004-8.159 10.898-10.666-10.107-2.506-14.999-.749-8.31-7.755s29.166-6.795 13.561-10.088c-15.606-3.293-11.44-8.779-3.223-8.969 8.217-.19 24.233-4.473 15.883-4.478-15.347-.01-18.989-15.273-9.809-9.365 9.181 5.908 34.546-7.194 22.559-8.104-11.988-.91-14.659-5.781-4.951-8.655Z'
        fill='#F5B715'
      />
      <Circle cx={269} cy={168} r={2} fill='#DDA513' />
      <Circle cx={288} cy={156} r={2} fill='#DDA513' />
      <Circle cx={311} cy={152} r={2} fill='#DDA513' />
      <Path
        opacity={0.1}
        d='M305.78 179.629c9.708-2.874 6.059-10.467 10.825-17.702 4.765-7.236-13.389 7.612-24.105 12.573-39.143 18.122-38.018 99.797-38.018 99.797s30.008-19.043 21.369-19.099c-9.227-.061-10.61-.494-6.66-7.436 3.95-6.943 21.039-8.063 10.933-10.569-10.107-2.507-15.047-.883-8.358-7.889s29.22-6.645 13.614-9.938c-15.605-3.293-11.513-8.986-3.296-9.176 8.217-.19 24.264-4.383 15.914-4.389-15.347-.01-18.945-15.151-9.764-9.243 9.18 5.908 34.545-7.194 22.558-8.104-11.988-.91-14.72-5.951-5.012-8.825Z'
        fill='#000'
      />
      <Path
        d='M129.641 305.668s-11.707-29.292-26.136-42.272c-18.398-16.55-59.156-22.714-59.156-22.714'
        stroke='#34B6FF'
      />
      <Ellipse
        rx={1.827}
        ry={4.751}
        transform='scale(1 -1) rotate(-58.272 -195.328 -166.097)'
        fill='#34B6FF'
      />
      <Ellipse
        rx={1.827}
        ry={4.751}
        transform='scale(1 -1) rotate(-58.272 -192.792 -176.963)'
        fill='#34B6FF'
      />
      <Ellipse
        rx={1.827}
        ry={4.751}
        transform='scale(1 -1) rotate(-51.004 -228.44 -197.171)'
        fill='#399CD3'
      />
      <Ellipse
        rx={1.827}
        ry={4.751}
        transform='scale(1 -1) rotate(-58.272 -188.3 -196.652)'
        fill='#34B6FF'
      />
      <Ellipse
        rx={2.193}
        ry={5.481}
        transform='scale(1 -1) rotate(-58.272 -187.913 -206.749)'
        fill='#123258'
      />
      <Ellipse
        rx={2.193}
        ry={5.481}
        transform='scale(1 -1) rotate(-80.687 -105.479 -188.499)'
        fill='#399CD3'
      />
      <Ellipse
        rx={2.7}
        ry={6.749}
        transform='scale(1 -1) rotate(-80.687 -107.45 -199.85)'
        fill='#123258'
      />
      <Ellipse
        rx={2.7}
        ry={6.749}
        transform='scale(1 -1) rotate(-80.687 -108.81 -207.717)'
        fill='#399CD3'
      />
      <Ellipse
        rx={2.7}
        ry={4.733}
        transform='scale(1 -1) rotate(-80.687 -112.03 -215.012)'
        fill='#123258'
      />
      <Ellipse
        rx={2.143}
        ry={5.571}
        transform='scale(1 -1) rotate(10.482 1394.405 349.79)'
        fill='#399CD3'
      />
      <Ellipse
        rx={2.143}
        ry={5.571}
        transform='scale(1 -1) rotate(10.482 1433.634 412.147)'
        fill='#123258'
      />
      <Ellipse
        rx={2.733}
        ry={7.106}
        transform='scale(1 -1) rotate(10.482 1495.123 468.536)'
        fill='#399CD3'
      />
      <Ellipse
        rx={2.733}
        ry={7.106}
        transform='scale(1 -1) rotate(-8.304 -1819.778 -949.117)'
        fill='#123258'
      />
      <Ellipse
        rx={2.733}
        ry={7.106}
        transform='scale(1 -1) rotate(-37.393 -356.045 -327.592)'
        fill='#399CD3'
      />
      <Ellipse
        rx={1.827}
        ry={4.751}
        transform='scale(1 -1) rotate(21.955 669.714 74.03)'
        fill='#34B6FF'
      />
      <Ellipse
        rx={1.827}
        ry={4.751}
        transform='scale(1 -1) rotate(12.337 1151.146 186.484)'
        fill='#34B6FF'
      />
      <Ellipse
        rx={1.827}
        ry={4.751}
        transform='scale(1 -1) rotate(16.15 870.067 75.576)'
        fill='#399CD3'
      />
      <Ellipse
        rx={1.827}
        ry={4.751}
        transform='scale(1 -1) rotate(-88.374 -103.79 -140.99)'
        fill='#34B6FF'
      />
      <Path
        d='M308.739 242c-6.588 1.279-12.468 2.375-17.739 3.4-.849.165-2 13.6-2 13.6s-2.183-12.776-3-12.61c-5.309 1.076-9.934 2.109-14 3.242-.682.19-2 17.368-2 17.368s-1.35-16.373-2-16.159a58.605 58.605 0 0 0-5.5 2.099c-.338.151 1 28.06 1 28.06s-2.672-27.276-3-27.11c-14.207 7.211-18.914 20.15-27.5 53.962 0 0 34.751 2.088 56-9.431.255-.138-21.5-10.421-21.5-10.421s22.836 9.669 23.12 9.5c4.012-2.392 7.461-5.32 9.984-8.901 2.741-3.89 4.611-8.86 5.875-14.099.12-.498-19.979 2-19.979 2s20.536-4.499 20.634-5c2.821-14.335 1.605-29.5 1.605-29.5Z'
        fill='#F84C6B'
      />
      <Path
        opacity={0.1}
        d='M308.739 242c-6.588 1.279-12.468 2.375-17.739 3.4-.849.165-2 13.6-2 13.6s-2.183-12.776-3-12.61c-5.309 1.076-9.934 2.109-14 3.242-.682.19-2 17.368-2 17.368s-1.35-16.373-2-16.159a58.605 58.605 0 0 0-5.5 2.099c-.338.151 1 28.06 1 28.06s-2.672-27.276-3-27.11c-14.207 7.211-18.914 20.15-27.5 53.962C266 289.5 295.5 269 308.739 242Z'
        fill='#000'
      />
      <Path
        d='M186.875 320.7c40.814 0 73.901-3.882 73.901-8.671s-33.087-8.671-73.901-8.671c-40.814 0-73.901 3.882-73.901 8.671s33.087 8.671 73.901 8.671Z'
        fill='#D3E3F1'
      />
      <Path
        d='M252.423 299.136c0 6.258-5.118 11.31-11.289 11.31H132.465c-6.171 0-11.288-5.127-11.288-11.31V66.756c0-6.257 5.117-11.309 11.288-11.309h108.669c6.246 0 11.289 5.127 11.289 11.31v232.379Z'
        fill='#123258'
      />
      <Path
        d='M248.961 72.487H125.166v209.081h123.795V72.488Z'
        fill='#4C6780'
      />
      <Path
        d='M172.05 78.142c8.729-4.976 24.307-5.278 31.306.679'
        stroke='#123258'
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d='m167.534 80.404 7.827-3.77 18.212-9.048 7.902 10.405 8.202 3.469 11.816 3.543-4.14 183.069-51.324.829-7.902-168.743 9.407-19.754Z'
        fill='#18DF80'
      />
      <Path fill='#3AB479' d='M152.563 237.234h74.645v44.485h-74.645z' />
      <Path
        opacity={0.3}
        d='M167.534 80.781c-1.429 28.652 21.599 62.053 21.9 83.165 0 0 7.375-27.973 10.536-37.85 3.16-9.953 10.912-37.85 9.707-44.561l6.773 76.153-22.952 14.401-24.684-11.762s-7.074-40.565-7.074-41.771c.602-28.576 5.794-37.775 5.794-37.775Z'
        fill='#9B9B9B'
      />
      <Path
        d='M208.624 102.571c-4.365 25.334-18.889 58.887-18.965 63.034 0 .288 4.476 71.153 6.512 116.114h48.163c-1.019-11.676-4.651-52.418-5.307-67.935-1.43-33.477.226-69.97-.828-78.113l-2.709-45.917c-12.191-5.052-18.212-6.636-25.813-8.37.076 5.504 1.204 8.219-1.053 21.187Z'
        fill='#fff'
      />
      <Path
        d='M167.911 104.381c4.666 22.242 22.125 47.049 22.125 65.823 0 .905-5.268 108.876-5.193 108.876.007 1.145.007 1.471 0 2.639h-55.629c5.485-24.918 9.68-49.293 10.25-74.193.602-27.671-.376-54.061-1.204-65.747l-.903-49.764c7.3-4.523 24.383-8.821 30.178-11.611-1.731 4.675-1.882 13.12.376 23.977Z'
        fill='#fff'
      />
      <Path
        d='M197.787 206.395a3.617 3.617 0 0 0 3.612 3.62c2.032 0 3.613-1.659 3.613-3.62a3.617 3.617 0 0 0-3.613-3.619 3.617 3.617 0 0 0-3.612 3.619ZM199.668 236.857a3.617 3.617 0 0 0 3.613 3.619c2.032 0 3.612-1.659 3.612-3.619a3.617 3.617 0 0 0-3.612-3.62 3.617 3.617 0 0 0-3.613 3.62Z'
        fill='#D3E3F1'
      />
      <Path
        d='M141.496 170.129c13.245-.453 33.112-.83 54.936-.905 5.72.151 3.462 20.961 1.355 17.643-11.89.377-77.588 17.493-81.427 8.294-2.558-6.183 11.74-86.784 18.137-99.677 3.612-5.58 7.149-7.766 15.051 1.96 5.945 7.314 1.882 24.203.376 28.802-2.408 7.314-8.428 43.883-8.428 43.883Z'
        fill='#fff'
      />
      <Path
        d='M193.874 193.351s42.82 8.671 45.153 16.287l-.301-9.275-44.852-7.012ZM139.539 196.82l38.155-6.635s-38.08 8.897-38.305 16.21M146.688 169.978l-5.192.151 6.397-35.287c0 .075-3.387 30.084-1.205 35.136ZM158.203 131.147a4.967 4.967 0 0 1-4.967 4.977c-2.785 0-4.967-2.262-4.967-4.977a4.967 4.967 0 0 1 4.967-4.976c2.709 0 4.967 2.262 4.967 4.976Z'
        fill='#D3E3F1'
      />
      <Path
        d='M156.02 131.147c0 1.508-1.279 2.79-2.784 2.79s-2.785-1.282-2.785-2.79 1.28-2.789 2.785-2.789c1.505 0 2.784 1.281 2.784 2.789Z'
        fill='#95B3C6'
      />
      <Path
        d='M176.866 60.197c1.053 4.373-1.129 14.024-1.505 16.437-.903.302-5.72 2.714-5.72 2.714 0 5.203.828 13.195 6.021 19 6.02 6.787 12.342 15.91 12.342 23.676l1.58.076c0-8.294 6.547-17.493 13.17-24.58 5.945-6.41 4.59-13.874 4.59-17.116l-5.945-2.488c-.301-.98-2.032-9.123-.226-16.21l-24.307-1.509Z'
        fill='#FFAF99'
      />
      <Path
        d='M177.016 62.308s.151 1.735-.15 4.6c0 0 6.698 9.575 11.74 9.802 5.042.226 11.89-8.068 11.89-8.068s.151-5.73.452-8.143l-23.932 1.81Z'
        fill='#F29A86'
      />
      <Path
        d='M212.387 31.47c-.527 12.215-10.837 21.64-23.029 21.112-12.191-.528-21.598-10.858-21.071-23.072.753-16.362 10.912-23.826 23.103-23.298 12.192.603 21.674 9.274 20.997 25.258Z'
        fill='#FFAF99'
      />
      <Path
        d='M212.387 31.47c-.527 11.838-.979 21.715-5.72 27.898-2.859 3.77-10.159 10.103-15.352 11.536-1.279.377-4.891 0-6.096-.528-4.966-2.036-11.137-8.746-13.621-12.592-4.214-6.635-3.763-16.512-3.236-28.274'
        fill='#FFAF99'
      />
      <Path
        d='M203.055 40.066c-.075 2.035-1.355 3.543-2.86 3.543-1.505-.075-2.634-1.734-2.558-3.77.075-2.035 1.354-3.619 2.859-3.543 1.505.075 2.634 1.734 2.559 3.77ZM182.51 39.236c-.075 2.036-1.355 3.544-2.86 3.544-1.505-.075-2.634-1.734-2.558-3.77.075-2.036 1.354-3.62 2.859-3.544 1.506.076 2.634 1.734 2.559 3.77ZM194.476 29.811s.903-.301 2.333-.377c.376 0 .752-.075 1.129-.075h1.279c.903 0 1.806.15 2.784.302.452.075.903.15 1.355.301.451.076.903.302 1.355.377.451.151.827.302 1.204.528.376.15.752.377 1.053.603.301.151.602.377.828.603.226.151.452.377.602.528.301.302.452.528.452.528.075.075.075.226-.076.302-.075.075-.15.075-.225.075 0 0-.226-.075-.602-.15-.226-.076-.377-.152-.678-.227-.301-.075-.527-.15-.903-.226-.677-.151-1.43-.302-2.182-.453-.828-.15-1.656-.301-2.559-.527-.903-.151-1.731-.377-2.559-.528-.451-.076-.827-.151-1.204-.226-.376-.076-.752-.151-1.053-.227-1.355-.301-2.258-.603-2.258-.603-.15-.075-.226-.15-.15-.301-.076-.151 0-.227.075-.227ZM185.37 30.49s-.903.226-2.183.452c-.677.151-1.429.227-2.257.377-.828.151-1.656.302-2.559.453-.828.15-1.731.301-2.483.452l-1.129.226c-.376.076-.677.151-.978.226-.301.076-.602.151-.828.227-.301.075-.452.15-.678.15-.376.076-.602.151-.602.151a.414.414 0 0 1-.376-.226c0-.075 0-.226.075-.302l.452-.452c.15-.15.301-.377.602-.528.226-.15.527-.377.828-.527.301-.151.677-.377 1.053-.528.377-.151.753-.302 1.204-.453.452-.15.828-.301 1.28-.377.451-.075.903-.226 1.354-.301a19.83 19.83 0 0 1 5.118-.151c1.354.15 2.257.452 2.257.452a.414.414 0 0 1 .226.377c-.15.227-.226.302-.376.302Z'
        fill='#0E263F'
      />
      <Path
        d='M185.596 51.752c1.279-.452 5.87-.301 6.998.302 1.054.603-2.333 1.206-3.537 1.206-1.204-.075-4.515-1.055-3.461-1.508Z'
        fill='#F29A86'
      />
      <Path
        opacity={0.5}
        d='M191.766 64.796c-2.031-.452-5.493-.527-7.074-.301-1.128.15 1.506-.905 3.537-.754 1.957.075 4.666 1.357 3.537 1.055Z'
        fill='#E5886E'
      />
      <Path
        d='M182.209 56.427c4.214 1.433 9.482 1.433 13.471 1.131.527 0 .301.075-.226.603-.828.905-3.386 3.77-6.848 3.62-3.311-.151-6.171-4.298-6.848-5.505-.151-.377.075.076.451.151Z'
        fill='#fff'
      />
      <Path
        d='M181.156 55.598c2.709.452 6.02-1.056 7.525.603 2.107-1.357 5.72 1.056 8.504 1.056.075 0 .15.075-.075.15-1.43.453-9.633 2.036-16.03-1.508-.301-.15-.225-.301.076-.301Z'
        fill='#F29A86'
      />
      <Path
        d='M181.306 55.975s2.107 3.544 3.688 4.976c1.505 1.357 5.644 1.81 7.375.679 1.58-1.056 4.139-4.147 4.139-4.147s-.602.15-.678.15c-1.505.905-2.408 1.81-4.063 2.413a8.169 8.169 0 0 1-5.193.076c-2.182-.679-2.634-2.338-4.139-3.544l-.753-.452-.376-.151Z'
        fill='#F29A86'
      />
      <Path
        d='M182.811 56.729c1.129.905 3.312 1.659 6.021 1.885 3.311.226 6.773-.83 6.773-.83s-3.537.528-6.623.377c-3.161-.15-6.171-1.432-6.171-1.432Z'
        fill='#D3E3F1'
      />
      <Path
        d='M153.386 131.147c-1.204-21.111 4.365-47.35 21.599-54.513'
        stroke='#123258'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M166.556 82.515 158.5 141l14.904 4.398-6.848 7.163 23.63 15.758s-.15-10.631-13.32-38.453c-9.633-20.358-9.858-30.839-10.31-47.35Z'
        fill='#D3E3F1'
      />
      <Path
        d='M234.587 170.506c-13.245-.453-39.961-7.54-61.86-7.54-1.43 0-20.169 5.051-20.244 7.238 2.86-.226 8.655.528 13.998 3.77 6.998 4.147 13.395 10.933 14.298 9.5 11.891.377 73.976 23.6 79.094 15.08 5.343-8.973-.151-28.199-1.731-37.398-2.935-17.191-6.171-34.608-10.762-51.422-3.16-11.536-12.567-29.858-24.307-14.401-5.72 7.464-.301 27.445 2.709 31.215 3.085 3.77 8.805 43.958 8.805 43.958Z'
        fill='#FFAF99'
      />
      <Path
        d='m193.498 187.697-13.697-6.259s-15.051-11.762-26.339-12.063l-.903.829s13.621.302 20.469 9.048c3.236 4.071 10.385 5.278 12.267 9.877 0-.075 5.945-1.055 8.203-1.432Z'
        fill='#F29A86'
      />
      <Path
        d='M209.677 81.46 222 141.5l-16.612 3.822 6.923 7.163-22.2 15.759-.527-3.62s10.235-27.294 14.675-43.882c5.795-21.111 5.418-39.282 5.418-39.282Z'
        fill='#D3E3F1'
      />
      <Path
        d='M186.875 163.72s-7.375 13.571-.151 28.425c0 0 65.698 11.31 72.848 8.822 7.149-2.488 1.354-31.517-.828-42.525-2.107-11.008-9.332-64.919-24.458-69.14l-6.096-2.414-8.052 3.846S219.582 110 217.5 110c2.082 0 6 29 6 29l8.001 27.962-44.626-3.242Z'
        fill='#fff'
      />
      <Path
        d='M232.63 157.612c5.494.905 8.504 15.457.753 16.513-4.741.678-7.752-1.056-11.514-4.298-3.236-2.79-11.59-4.373-16.406-4.675 0-.075 17.685-9.123 27.167-7.54Z'
        fill='#FFAF99'
      />
      <Path
        d='M230.072 133.032c.301 1.207 2.558 24.505 2.558 24.505s-2.408-.452-5.192 0c0 .075 4.139-2.111 2.634-24.505Z'
        fill='#D3E3F1'
      />
      <Path
        d='M208.022 152.334c0 .83-.678 1.508-1.505 1.508a1.511 1.511 0 0 1-1.506-1.508c0-.829.678-1.508 1.506-1.508.827 0 1.505.679 1.505 1.508ZM225.03 152.334c0 .83-.678 1.508-1.506 1.508a1.511 1.511 0 0 1-1.505-1.508c0-.829.678-1.508 1.505-1.508.828 0 1.506.679 1.506 1.508Z'
        fill='#123258'
      />
      <Path
        d='M206.592 152.334c0 .679-.527 1.131-1.129 1.131h-.903c-.602 0-1.129-.527-1.129-1.131a1.11 1.11 0 0 1 1.129-1.131h.903c.602-.075 1.129.453 1.129 1.131ZM226.384 152.334c0 .679-.527 1.131-1.129 1.131h-.903c-.602 0-1.129-.527-1.129-1.131a1.11 1.11 0 0 1 1.129-1.131h.903c.602-.075 1.129.453 1.129 1.131Z'
        fill='#123258'
      />
      <Path
        d='M201.776 77.539c10.009 6.183 11.89 20.282 13.696 34.005'
        stroke='#123258'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M206.517 152.334c-11.815-27.671 8.955-40.79 8.955-40.79s22.2 13.496 8.052 40.79'
        stroke='#123258'
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d='M199.217 205.868c0 1.206.978 0 2.257 0 1.205 0 2.258 1.206 2.258 0 0-1.207-.978-2.262-2.258-2.262-1.279 0-2.257.98-2.257 2.262ZM201.098 236.555c0 1.206.979 0 2.258 0 1.204 0 2.258 1.206 2.258 0s-.979-2.262-2.258-2.262c-1.279.075-2.258 1.056-2.258 2.262Z'
        fill='#D3E3F1'
      />
      <Path
        d='M167.998 38c.154-4.601 3.149-14.256 7.603-17.273 4.454-3.092 7.372-7.617 7.372-7.617s-.154 6.41 8.063 8.22c8.984 2.037 17.508 3.546 20.426 10.41l.538-3.093L183.664 7l-12.978 14.406L167 30.08l.998 7.92Z'
        fill='#F29A86'
      />
      <Path
        d='M217.143 50c-.09-7.334.361-13.202-5.5-18.427-8.297-7.426-15.601-4.86-22.274-9.443-6.223-4.31-6.854-11.093-6.132-17.603.36-3.392 7.935-5.317 13.436-4.217 18.036 3.484 22.905 22.645 22.274 37.405-.451 7.61-1.804 12.285-1.804 12.285Z'
        fill='#0E263F'
      />
      <Path
        d='M209.556 45c-.07-5.28.281-9.505-4.278-13.268-6.453-5.346-12.134-3.498-17.325-6.799-4.839-3.102-5.33-7.987-4.769-12.673.281-2.443 6.172-3.829 10.451-3.037 14.027 2.509 17.815 16.304 17.324 26.932-.351 5.479-1.403 8.845-1.403 8.845Z'
        fill='#0E263F'
      />
      <Path
        d='M224.798 72.912C239.434 61.292 211.134 19 211.134 19s1.346 13.745 0 22.379v.001c-.853 5.473-1.371 8.797-3.543 13.731C205.328 60.256 200 65.792 200 65.792v10.172c0 .814 2.362 1.695 3.543 2.035 0 0 14.56.23 21.255-5.087ZM154.651 72.5c-14.46-11.423 13.5-53 13.5-53s-1.33 13.512 0 22v.002c.843 5.38 1.355 8.647 3.5 13.498 2.236 5.057 7.5 10.5 7.5 10.5v10c0 .8-2.333 1.667-3.5 2 0 0-14.385.226-21-5Z'
        fill='#0E263F'
      />
      <Path
        d='M182.886 10.138c-1.2 3.921-4.542 7.189-8.655 10.13-8.313 5.963-8.656 21.566-8.056 25.732 0 0-2.999-8.006-3.171-17.727C162.747 14.794 174.402-1.87 184 4.338c-.257 2.124-.6 4.003-1.114 5.8Z'
        fill='#0E263F'
      />
      <Path
        d='M188.189 11.098c-1.031 4.043-4.665 7.69-9.245 11.104-9.253 6.918-8.107 22.485-6.982 26.559 0 0-4.349-7.61-5.52-17.263-1.645-13.382 10.503-31.344 22.49-26.304-.093 2.144-.312 4.054-.743 5.904Z'
        fill='#0E263F'
      />
      <Path
        d='M190.487 295.441a3.617 3.617 0 0 1-3.612 3.62c-2.032 0-3.612-1.659-3.612-3.62a3.616 3.616 0 0 1 3.612-3.619c2.032-.075 3.612 1.584 3.612 3.619Z'
        stroke='#fff'
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M133.745 64.646c0 1.055-.903 1.96-1.957 1.96s-1.957-.905-1.957-1.96c0-1.056.903-1.96 1.957-1.96s1.957.829 1.957 1.96Z'
        fill='#fff'
      />
      <Path
        opacity={0.3}
        d='M139.389 64.646c0 1.055-.903 1.96-1.957 1.96-1.053 0-1.956-.905-1.956-1.96 0-1.056.903-1.96 1.956-1.96 1.054 0 1.957.829 1.957 1.96Z'
        fill='#fff'
      />
      <Path
        d='M169.933 245.903c.021-.307.043-.609.067-.903 0 0-.023.325-.067.903-.646 9.451-.025 24.914-2.852 27.096-2.81 2.168-13.433.162-20.298.009-.5-.004-.783-.009-.783-.009.255 0 .516.003.783.009 3.39.026 16.739-.018 19.001-2.262 2.287-2.27 3.818-20.544 4.149-24.843ZM210.067 245.903c.646 9.451.025 24.914 2.852 27.096 2.81 2.168 13.433.162 20.298.009.5-.004.783-.009.783-.009-.255 0-.516.003-.783.009-3.39.026-16.739-.018-19.001-2.262-2.287-2.27-3.818-20.544-4.149-24.843Z'
        fill='#D3E3F1'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h375v321H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default IllustrationOneSvg;