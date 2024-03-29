export function setThumbnailBasedOnUrl() {
  navigator.clipboard.readText().then(clipboardText => {
    const url = clipboardText.trim();

    let thumbnailImage = '';
    let description = '';

    if (url.includes('review/peer/?uuid=')) {
      thumbnailImage =
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTYouYZh6_YU9jCfKbLJxRYDjDgokrpVnu4B_xytwiqBFVnqR6cwDh1w8h83P-yIrZQiKLk7gzlLI7YYtPxoxL5GEYj=w800-h400';
      description = `저는 어떤 동료인가요? \n피어테스트를 통해 솔직하게 알려주세요`;
    } else if (url.includes('/project')) {
      thumbnailImage =
        'https://lh3.googleusercontent.com/fife/AGXqzDnPtkksK8odzpatpNl-Rm3xut8EuEnoINVklaY3_V90TeAjLuWmKBH_qbyzYk8o5PLDxKbyhw-SYn15fiMiZwVlA35TasPUvdIHyKAvFJqzqqhJod3R7ZyslRR4tIy5WWwGgAlgaKum_8fJDjCBOJoM34SvNFA8ZLC8hUsE-iDCkmgqrOyUSwCxV1Iuaglbx0BA9Q9NH9tU5wA_eVajyWvFYFskOusiW9VyoqDM_upsmndJBJeqFMiKhONBHcshKSvhE27avseLOWe5CQDAAaESPiRishR7IvFYn2hUllBInAPJFXiZqt4EuWQ8T7D2yU-2QpvNzXPiYjRML3SmXKH4ld0GQMUjMJsQXU-npnmxEt3rMtuNQy-WYSRC6kF8KSHw7eGjMG9eJRuy78FIfkDz4YFk2Ygz4ZOIRqOWRn4d2EH-5BLP97OwRRp0YHhBHdR-WefMdmG_9X_L-TlPil90Wyki4wr_QWxQ5Clxzx8BSC9wbqA8rfWB9Q6CC0gnkW4OaybHG2lIuw6OO4J5RlZDvDOJ6Xc24xKbGHWZuPXSxCK3ROBkMPLZ0CxCJVhNqBZ0ooTWnIctjfrYX_T4EcXSSp239h16aqU-ITrNFN-SoRxdFj8qPIVa1reFFYKi8-7ybzRmYDw2K0F2JbKIhUnvgBvVbYaHq_J-Bs57jrDZAZcH4ObBsAcyvXpee044k7ZHp_D6F2ukyOWSiW4rDmFUDCfAXpKFwrwVptc_6NEhI1qzqQZBg9zhIaeXtSyuzu2zA_sRCDG--G9vU2zP3b9K3yz60AucfeH2pHjTu_ejuQ7VjDaBn66IKa9z6CZB-pUGCv4hkYGrxBp2UdML7kGPl4uJHI9tksSiKiOfYjLEP6w_C6-f0SEHPHZSCtUujezUl87YvLBZqEwbACIJbY0SJIqWx8PVhpbQwZMCZqFDzI0gWxLOKdwE7Z6cjZdvT5xwZTJ6PSaT6TnJBY0r5Ex8F5sS5vmtCtmzK6f6MYfFW65eyy6oknik9rySv_coJ9pGSAurTJ7D1WUvJ5G5L3YrOD0j_CcPVl3Rrp0p05GX1ZL7SmeXYApvlVeefJj4zmtnG4klOf4qqqz47CfsUx3JC89yDbQv8hpEaZ56MtiqI5HqUGIfSUBlQvTKevwm0RtT-uu8N0b8ifFdVcoiOpH6UriVo02Foh7p3wji6D8nh4EYVc9xB91H2vD0c-4PM0hMoO_kMUp1kyrc8CY9PTFysMJ3yDXiydMYP-AE6Axfj1AEa0El3oH-5YnjCZtbiJrpndIwS1s8YEl7gHJv3d6NVrjPcFN8UMCeGcl4EnEVuHqCufmgf1JzV0I90blgaw5A5mD4N_NiAnbXMQ2uY25zQ0VO3Vl3uchjyqDPdpMZZPfKfn8kSiKNl2hiLmMCb3JWjlvsQ1YQA-kqz88sOKAzt_4AVzDEocv0GkZoD5whMAC3WoeGlypp8PrDnB82eC4SaW-sXf1EnKDFK74w72w5Fz5lxaGiRP16pwNadfm8vViejkjAwxdJhGZajrbT9c80VemRxsW04tCs0c5QM9k8erSamPqo-B2rG2TEaz3bVl03=w1920-h911';
      description =
        '우리 프로젝트 같이 해요! \n자세한 내용은 프로젝트 상세 페이지를 통해 확인해주세요.';
    } else {
      thumbnailImage =
        'https://lh3.googleusercontent.com/fife/AGXqzDnPtkksK8odzpatpNl-Rm3xut8EuEnoINVklaY3_V90TeAjLuWmKBH_qbyzYk8o5PLDxKbyhw-SYn15fiMiZwVlA35TasPUvdIHyKAvFJqzqqhJod3R7ZyslRR4tIy5WWwGgAlgaKum_8fJDjCBOJoM34SvNFA8ZLC8hUsE-iDCkmgqrOyUSwCxV1Iuaglbx0BA9Q9NH9tU5wA_eVajyWvFYFskOusiW9VyoqDM_upsmndJBJeqFMiKhONBHcshKSvhE27avseLOWe5CQDAAaESPiRishR7IvFYn2hUllBInAPJFXiZqt4EuWQ8T7D2yU-2QpvNzXPiYjRML3SmXKH4ld0GQMUjMJsQXU-npnmxEt3rMtuNQy-WYSRC6kF8KSHw7eGjMG9eJRuy78FIfkDz4YFk2Ygz4ZOIRqOWRn4d2EH-5BLP97OwRRp0YHhBHdR-WefMdmG_9X_L-TlPil90Wyki4wr_QWxQ5Clxzx8BSC9wbqA8rfWB9Q6CC0gnkW4OaybHG2lIuw6OO4J5RlZDvDOJ6Xc24xKbGHWZuPXSxCK3ROBkMPLZ0CxCJVhNqBZ0ooTWnIctjfrYX_T4EcXSSp239h16aqU-ITrNFN-SoRxdFj8qPIVa1reFFYKi8-7ybzRmYDw2K0F2JbKIhUnvgBvVbYaHq_J-Bs57jrDZAZcH4ObBsAcyvXpee044k7ZHp_D6F2ukyOWSiW4rDmFUDCfAXpKFwrwVptc_6NEhI1qzqQZBg9zhIaeXtSyuzu2zA_sRCDG--G9vU2zP3b9K3yz60AucfeH2pHjTu_ejuQ7VjDaBn66IKa9z6CZB-pUGCv4hkYGrxBp2UdML7kGPl4uJHI9tksSiKiOfYjLEP6w_C6-f0SEHPHZSCtUujezUl87YvLBZqEwbACIJbY0SJIqWx8PVhpbQwZMCZqFDzI0gWxLOKdwE7Z6cjZdvT5xwZTJ6PSaT6TnJBY0r5Ex8F5sS5vmtCtmzK6f6MYfFW65eyy6oknik9rySv_coJ9pGSAurTJ7D1WUvJ5G5L3YrOD0j_CcPVl3Rrp0p05GX1ZL7SmeXYApvlVeefJj4zmtnG4klOf4qqqz47CfsUx3JC89yDbQv8hpEaZ56MtiqI5HqUGIfSUBlQvTKevwm0RtT-uu8N0b8ifFdVcoiOpH6UriVo02Foh7p3wji6D8nh4EYVc9xB91H2vD0c-4PM0hMoO_kMUp1kyrc8CY9PTFysMJ3yDXiydMYP-AE6Axfj1AEa0El3oH-5YnjCZtbiJrpndIwS1s8YEl7gHJv3d6NVrjPcFN8UMCeGcl4EnEVuHqCufmgf1JzV0I90blgaw5A5mD4N_NiAnbXMQ2uY25zQ0VO3Vl3uchjyqDPdpMZZPfKfn8kSiKNl2hiLmMCb3JWjlvsQ1YQA-kqz88sOKAzt_4AVzDEocv0GkZoD5whMAC3WoeGlypp8PrDnB82eC4SaW-sXf1EnKDFK74w72w5Fz5lxaGiRP16pwNadfm8vViejkjAwxdJhGZajrbT9c80VemRxsW04tCs0c5QM9k8erSamPqo-B2rG2TEaz3bVl03=w1920-h911';
      description = '소프트 스킬 평판 기반 프로젝트 동료 탐색 및 제안 서비스';
    }

    const metaImage = document.createElement('meta');
    metaImage.setAttribute('property', 'og:image');
    metaImage.setAttribute('content', thumbnailImage);
    document.head.appendChild(metaImage);

    const metaDescription = document.createElement('meta');
    metaDescription.setAttribute('property', 'og:description');
    metaDescription.setAttribute('content', description);
    document.head.appendChild(metaDescription);
  });
}
