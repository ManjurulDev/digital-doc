import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';

const ViewAllSvg = () => (
  <Svg width={68} height={21} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M4.366 15 .012 5.13h1.554l3.458 8.036L8.482 5.13h1.484L5.612 15H4.366Zm6.4-8.414v-1.47h1.652v1.47h-1.652ZM10.892 15V8.168h1.414V15h-1.414Zm6.61.126c-1.12 0-2.001-.313-2.645-.938-.644-.635-.966-1.498-.966-2.59 0-.7.14-1.316.42-1.848.29-.541.686-.961 1.19-1.26.504-.299 1.082-.448 1.736-.448.942 0 1.684.303 2.226.91.541.597.812 1.423.812 2.478v.476h-5.012c.102 1.419.854 2.128 2.254 2.128.392 0 .774-.06 1.148-.182a3.179 3.179 0 0 0 1.078-.602l.42.98c-.308.28-.705.5-1.19.658a4.703 4.703 0 0 1-1.47.238Zm-.21-6.09c-.587 0-1.054.182-1.4.546-.345.364-.555.85-.63 1.456h3.823c-.028-.635-.196-1.125-.504-1.47-.308-.355-.738-.532-1.288-.532ZM23.57 15l-2.604-6.832h1.456l1.834 5.18 1.89-5.18h1.092l1.862 5.208 1.862-5.208h1.386L29.743 15h-1.288l-1.806-4.886L24.857 15h-1.288Zm19.53.126c-.475 0-.9-.093-1.273-.28a2.371 2.371 0 0 1-.896-.756 1.88 1.88 0 0 1-.322-1.078c0-.504.126-.9.378-1.19.261-.29.686-.5 1.274-.63.597-.13 1.4-.196 2.408-.196h.476v-.364c0-.532-.112-.915-.336-1.148-.224-.233-.593-.35-1.106-.35-.392 0-.784.06-1.176.182a4.876 4.876 0 0 0-1.204.546l-.434-.994c.355-.252.798-.453 1.33-.602a5.645 5.645 0 0 1 1.526-.224c.933 0 1.624.224 2.072.672.448.439.672 1.13.672 2.072V15h-1.33v-1.134c-.168.392-.43.7-.784.924-.355.224-.78.336-1.274.336Zm.28-1.008c.505 0 .925-.177 1.26-.532.337-.355.505-.803.505-1.344v-.378h-.462c-.681 0-1.218.033-1.61.098-.383.065-.658.177-.826.336-.159.15-.238.36-.238.63 0 .355.121.644.364.868.242.215.578.322 1.008.322Zm7.282 1.008c-.746 0-1.306-.21-1.68-.63-.364-.42-.546-1.036-.546-1.848V5.13h1.414v7.434c0 .924.378 1.386 1.134 1.386.112 0 .215-.005.308-.014.103-.01.206-.028.308-.056l-.028 1.134c-.317.075-.62.112-.91.112Zm4.28 0c-.747 0-1.307-.21-1.68-.63-.364-.42-.546-1.036-.546-1.848V5.13h1.414v7.434c0 .924.378 1.386 1.134 1.386.112 0 .214-.005.308-.014.102-.01.205-.028.308-.056l-.028 1.134c-.318.075-.621.112-.91.112Z'
      fill='#123258'
    />
    <G clipPath='url(#a)'>
      <Path
        d='m63 14.5 4-4-4-4'
        stroke='#123258'
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' transform='translate(62 5.5)' d='M0 0h6v10H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ViewAllSvg;