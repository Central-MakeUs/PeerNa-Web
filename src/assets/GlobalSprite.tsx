import { createPortal } from 'react-dom';

const svgSpriteCode = (
  <svg xmlns="http://www.w3.org/2000/svg">
    <symbol id="straight" viewBox="0 0 16 16">
      <path
        fill="#FF744D"
        d="M5 2.5c0 .51-.152.983-.414 1.379L6.62 5.914A2.496 2.496 0 0 1 8 5.5c.51 0 .983.152 1.379.414l2.035-2.035a2.5 2.5 0 1 1 .707.707L10.086 6.62c.262.396.414.87.414 1.379 0 .51-.152.983-.414 1.379l2.035 2.035a2.5 2.5 0 1 1-.707.707L9.38 10.086a2.49 2.49 0 0 1-1.379.414c-.51 0-.983-.152-1.379-.414L4.586 12.12a2.5 2.5 0 1 1-.707-.707L5.914 9.38A2.488 2.488 0 0 1 5.5 8c0-.51.152-.983.414-1.379L3.88 4.586A2.5 2.5 0 1 1 5 2.5z"
      />
    </symbol>
    <symbol id="search" viewBox="0 0 23 23">
      <path
        fill="#394046"
        d="M8.75 0a8.75 8.75 0 0 1 6.695 14.384l6.835 6.836a.75.75 0 0 1-.976 1.133l-.084-.073-6.836-6.835A8.75 8.75 0 1 1 8.75 0zm0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5z"
      />
    </symbol>
    <symbol id="total" viewBox="0 0 16 17">
      <path
        fill="#FF744D"
        d="M7 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2.009 9A2.001 2.001 0 0 0 0 11c0 1.691.833 2.966 2.135 3.797C3.417 15.614 5.145 16 7 16c1.061 0 2.081-.126 3-.388v-1.967A3.985 3.985 0 0 1 9 11c0-.728.195-1.41.535-1.999H2.009zM13 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a3.98 3.98 0 0 0 2-.536v2.285a.25.25 0 0 1-.378.215L13 16l-1.622.965A.25.25 0 0 1 11 16.75v-2.285A3.98 3.98 0 0 0 13 15z"
      />
    </symbol>
    <symbol id="alert-focus" viewBox="0 0 20 22">
      <path
        fill="#394046"
        d="M13.471 19.002a3.502 3.502 0 0 1-6.931 0h6.931zM10.006 0a8.501 8.501 0 0 1 8.497 8.246v.255h.004v4.112l1.414 3.644c.038.099.064.201.076.306l.01.157a1.28 1.28 0 0 1-1.149 1.274l-.13.006H1.28a1.28 1.28 0 0 1-1.234-1.62l.041-.124 1.417-3.644v-4.11A8.501 8.501 0 0 1 10.006 0z"
      />
    </symbol>
    <symbol id="home" viewBox="0 0 20 22">
      <path
        fill="#394046"
        d="M8.592.495a2.25 2.25 0 0 1 2.816 0l7.75 6.218A2.25 2.25 0 0 1 20 8.468v11.28a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25v-6a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v6a2.25 2.25 0 0 1-2.25 2.25h-3A2.25 2.25 0 0 1 0 19.749V8.469c0-.682.31-1.328.842-1.755L8.592.495zm1.877 1.17a.75.75 0 0 0-.938 0L1.78 7.883a.75.75 0 0 0-.281.585v11.28c0 .415.336.75.75.75h3a.75.75 0 0 0 .75-.75v-6a2.25 2.25 0 0 1 2.25-2.25h3.5a2.25 2.25 0 0 1 2.25 2.25v6c0 .415.336.75.75.75h3a.75.75 0 0 0 .75-.75V8.469a.75.75 0 0 0-.28-.585l-7.75-6.218z"
      />
    </symbol>
    <symbol id="alert" viewBox="0 0 20 22">
      <path
        fill="#394046"
        d="M10.006 0a8.501 8.501 0 0 1 8.497 8.246l.004.255v4.612l1.414 3.644c.038.098.064.201.076.305l.01.158a1.28 1.28 0 0 1-1.149 1.273l-.13.007-5.221.001a3.501 3.501 0 0 1-6.998.192l-.005-.194-5.224.001a1.28 1.28 0 0 1-1.234-1.62l.041-.124 1.417-3.644v-4.61A8.501 8.501 0 0 1 10.006 0zM12 18.65l.005-.151-4.002.002a2.001 2.001 0 0 0 3.998.15zM10.006 1.5a7.001 7.001 0 0 0-6.998 6.76l-.004.241v4.752a.75.75 0 0 1-.022.184l-.029.088L1.602 17h16.804l-1.348-3.474a.748.748 0 0 1-.046-.18l-.005-.092V8.501A7.001 7.001 0 0 0 10.006 1.5z"
      />
    </symbol>
    <symbol id="home-focus" viewBox="0 0 20 22">
      <path
        fill="#394046"
        d="M11.408.495a2.25 2.25 0 0 0-2.816 0L.842 6.712A2.25 2.25 0 0 0 0 8.467v11.28a2.25 2.25 0 0 0 2.25 2.25h2.5A2.25 2.25 0 0 0 7 19.747v-5.5c0-.69.56-1.25 1.25-1.25h3.5c.69 0 1.25.56 1.25 1.25v5.5a2.25 2.25 0 0 0 2.25 2.25h2.5a2.25 2.25 0 0 0 2.25-2.25V8.467a2.25 2.25 0 0 0-.842-1.755L11.408.495z"
      />
    </symbol>
    <symbol id="people" viewBox="0 0 24 22">
      <path
        fill="#394046"
        d="M15.254 8a2.25 2.25 0 0 1 2.25 2.25v6.249a5.501 5.501 0 0 1-11.002 0V10.25A2.25 2.25 0 0 1 8.752 8h6.502zm0 1.5H8.752a.75.75 0 0 0-.75.75v6.249a4.001 4.001 0 0 0 8.002 0V10.25a.75.75 0 0 0-.75-.75zM2.25 8h4.156a3.244 3.244 0 0 0-.817 1.5H2.25a.75.75 0 0 0-.75.75v5.249a3.001 3.001 0 0 0 4.238 2.735c.133.49.324.956.564 1.392A4.501 4.501 0 0 1 0 15.499V10.25A2.25 2.25 0 0 1 2.25 8zm19.5 0A2.25 2.25 0 0 1 24 10.25v5.25a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.214-.406.387-.837.511-1.289A3 3 0 0 0 22.5 15.5v-5.25a.75.75 0 0 0-.749-.75h-3.333A3.243 3.243 0 0 0 17.6 8h4.151zM12 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm8.003 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM3.997 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM12 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8.003 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-16.006 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
      />
    </symbol>
    <symbol id="people-focus" viewBox="0 0 24 22">
      <path
        fill="#394046"
        d="M15.754 8c.967 0 1.75.784 1.75 1.75v6.749a5.501 5.501 0 0 1-11.002 0V9.75c0-.966.783-1.75 1.75-1.75h7.502zM1.75 8l4.382-.002a2.73 2.73 0 0 0-.621 1.532l-.01.22v6.749c0 1.133.291 2.199.8 3.127A4.501 4.501 0 0 1 0 15.499V9.75A1.752 1.752 0 0 1 1.751 8zm16.124-.002L22.25 8c.966 0 1.75.784 1.75 1.75v5.75a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.429-.813.69-1.729.738-2.7l.008-.326V9.75c0-.666-.237-1.276-.63-1.752zM12 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm8.003 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM3.997 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
      />
    </symbol>
    <symbol id="process" viewBox="0 0 17 17">
      <path
        fill="#FF744D"
        d="M3.868 1.166C6.24-.288 9.04-.424 11.795.992c3.976 2.042 5.502 6.162 4.187 10.435-.415 1.35-1.245 2.698-2.372 3.59-1.14.902-2.603 1.347-4.205.799-1.103-.377-1.79-.967-2.204-1.68-.404-.696-.519-1.462-.574-2.132a25.653 25.653 0 0 1-.038-.586c-.008-.132-.015-.259-.023-.369a4.725 4.725 0 0 0-.1-.76 1.163 1.163 0 0 0-.206-.466.75.75 0 0 0-.387-.244C5.356 9.42 5 9.453 4.718 9.543c-.248.078-.447.2-.69.346a17.07 17.07 0 0 1-.196.119c-.316.186-.72.396-1.239.37-.514-.025-1.045-.275-1.655-.773C.268 9.06.003 8.295 0 7.493c-.003-.788.243-1.635.614-2.434.737-1.59 2.043-3.15 3.254-3.893zm3.98 3.584a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM13.598 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
      />
    </symbol>
    <symbol id="mypage" viewBox="0 0 24 20">
      <path
        fill="#394046"
        d="M12.996 7.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75zm.75 3.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5zm-4.5-3.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0zm-4.25 2.75h5a1 1 0 0 1 1 1v.5s-.5 2.5-3.5 2.5-3.5-2.5-3.5-2.5v-.5a1 1 0 0 1 1-1zM0 2.75A2.75 2.75 0 0 1 2.75 0h18.497a2.75 2.75 0 0 1 2.75 2.75v14.5a2.75 2.75 0 0 1-2.75 2.75H2.75A2.75 2.75 0 0 1 0 17.25V2.75zM2.75 1.5c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25h18.497c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25H2.75z"
      />
    </symbol>
    <symbol id="check" viewBox="0 0 12 9">
      <path
        fill="#fff"
        d="M11.614.157a.5.5 0 0 1-.021.707l-7.93 7.474a.6.6 0 0 1-.839-.016l-2.68-2.72A.5.5 0 1 1 .856 4.9l2.406 2.442L10.907.136a.5.5 0 0 1 .707.021z"
      />
    </symbol>
    <symbol id="mypage-focus" viewBox="0 0 24 20">
      <path
        fill="#394046"
        d="M2.75 0A2.75 2.75 0 0 0 0 2.75v14.5A2.75 2.75 0 0 0 2.75 20h18.497a2.75 2.75 0 0 0 2.75-2.75V2.75A2.75 2.75 0 0 0 21.247 0H2.75zm10.246 7.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75zm.75 3.25h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5zm-4.5-3.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0zm-4.25 2.75h5a1 1 0 0 1 1 1v.5s-.5 2.5-3.5 2.5-3.5-2.5-3.5-2.5v-.5a1 1 0 0 1 1-1z"
      />
    </symbol>
    <symbol id="project" viewBox="0 0 19 24">
      <path
        fill="#394046"
        d="M11.375 0c1.39 0 2.527 1.08 2.619 2.445l.006.18a2.56 2.56 0 0 0-.016-.292h2.058a2.625 2.625 0 0 1 2.625 2.625v15.75a2.625 2.625 0 0 1-2.625 2.625H2.625A2.625 2.625 0 0 1 0 20.708V4.958a2.625 2.625 0 0 1 2.625-2.625h2.058a2.646 2.646 0 0 0-.015.206l-.001.086A2.625 2.625 0 0 1 7.292 0h4.083zm0 5.25H7.292c-.927 0-1.741-.48-2.208-1.205l.025.039H2.625a.875.875 0 0 0-.875.874v15.75c0 .484.392.875.875.875h13.417a.875.875 0 0 0 .875-.875V4.958a.875.875 0 0 0-.875-.875h-2.484l.025-.038a2.623 2.623 0 0 1-2.208 1.205zm0-3.5H7.292a.875.875 0 1 0 0 1.75h4.083a.875.875 0 0 0 0-1.75zM4.667 14.583h4.666a.875.875 0 1 0 0-1.75H4.667a.875.875 0 0 0 0 1.75zm0-4.666H14a.875.875 0 0 0 0-1.75H4.667a.875.875 0 1 0 0 1.75zm0 9.333h7a.875.875 0 1 0 0-1.75h-7a.875.875 0 0 0 0 1.75z"
      />
    </symbol>
    <symbol id="add-person" viewBox="0 0 25 25">
      <path
        fill="#394046"
        d="M13.114 23.719a7.533 7.533 0 0 1-1.04-1.35c-.655.085-1.348.131-2.074.131-5.111 0-8.5-2.111-8.5-4.785V17l.007-.145A1.5 1.5 0 0 1 3 15.5h8.624A7.486 7.486 0 0 1 12.5 14H3a3 3 0 0 0-3 3v.715C0 21.433 4.21 24 10 24a16.81 16.81 0 0 0 3.114-.281zM16 6A6 6 0 1 0 4 6a6 6 0 0 0 12 0zM5.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zm13 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-11a.5.5 0 0 1 .5.5V18h3.5a.5.5 0 0 1 0 1H19v3.5a.5.5 0 0 1-1 0V19h-3.5a.5.5 0 0 1 0-1H18v-3.5a.5.5 0 0 1 .5-.5z"
      />
    </symbol>
    <symbol id="project-focus" viewBox="0 0 19 24">
      <path
        fill="#394046"
        d="M11.375 1.75H7.292a.875.875 0 1 0 0 1.75h4.083a.875.875 0 0 0 0-1.75zm0-1.75c1.329 0 2.427.988 2.601 2.269l.016.158-.008-.094h2.058a2.625 2.625 0 0 1 2.625 2.625v15.75a2.625 2.625 0 0 1-2.625 2.625H2.625A2.625 2.625 0 0 1 0 20.708V4.958a2.625 2.625 0 0 1 2.625-2.625h2.058l-.01.094.018-.158A2.626 2.626 0 0 1 7.29 0h4.084zm.292 17.5h-7a.875.875 0 0 0 0 1.75h7a.875.875 0 1 0 0-1.75zm-2.334-4.667H4.667a.875.875 0 0 0 0 1.75h4.666a.875.875 0 1 0 0-1.75zM14 8.167H4.667a.875.875 0 1 0 0 1.75H14a.875.875 0 0 0 0-1.75z"
      />
    </symbol>
  </svg>
);

export function GlobalSprite() {
  return createPortal(svgSpriteCode, document.body);
}
