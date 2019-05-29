import React from "react";
import Collapsible from './component/Collapsible';
import './Context.scss';

class Context extends React.Component {
  render() {
    return (
      <div className="cx-wrapper">
      {/* 노트 내용을 map으로 가져오면 됨 */}
        <Collapsible trigger="[공지] 개인정보 처리방침 개정안내">
          <p>서비스를 이용해 주시는 회원 여러분께 감사드리며, 새로운 개인정보 처리방침 적용에 관한 안내 말씀 드립니다. 회사는 이용자 여러분의 개인정보를 무엇보다 소중하게 취급하고 있으며, 이떤 사안보다도 우선하여 안전하게 관리하고 있습니다.</p>
          <p>새롭게 변경될 개인정보 처리방침 안을 확인하시고 서비스 이용에 참고하시기 바랍니다.</p>
        </Collapsible>
        <Collapsible trigger="운영정책 변경 안내">
          <p>카카오 서비스를 이용해 주시는 회원 여러분께 감사드리며, 운영정책 변경에 관해 안내 말씀 드립니다.</p>
          <p>본 운영정책은 (주) 카카오가 제공하는 ‘카카오’ 브랜드를 사용하는 서비스를 운영함에 있어, 서비스 내에 발생할 수 있는 문제 상황에 대하여 일관성 있게 대처하기 위하여 서비스 운영의 기준과 고객 여러분이 지켜주셔야 할 세부적인 사항이 규정되어 있습니다. 운영정책을 지키지 않을 경우 불이익을 당할 수 있으니 주의 깊게 읽어 주시기 바랍니다. </p>
        </Collapsible>
        <Collapsible trigger="Microsoft Office용 보안 업데이트">
          <p>이 보안 업데이트는 Microsoft Office의 취약성을 해결합니다. 사용자가 특수 제작된 Microsoft Office 파일을 열면 이 취약성으로 인해 원격 코드 실행이 허용될 수 있습니다. 이러한 취약성 악용에 성공한 공격자는 현재 사용자의 컨텍스트에서 임의의 코드를 실행할 수 있습니다. 시스템에 대한 사용자 권한이 적게 구성된 계정의 고객은 관리자 권한으로 작업하는 고객보다 영향을 덜 받을 수 있습니다.</p>
        </Collapsible>
        <Collapsible trigger="로컬 보안 기관 하위 시스템 서비스의 보안 업데이트">
          <p>LSASS(로컬 보안 기관 하위 시스템 서비스)에서 인증 요청이 처리되는 방식에 서비스 거부 취약성이 존재합니다. 취약성을 성공적으로 악용한 공격자는 대상 시스템의 LSASS 서비스에서 서비스 거부를 유발해 시스템이 자동으로 다시 부팅하도록 트리거합니다. 이 업데이트는 LSASS가 특수 제작된 인증 요청을 처리하는 방식을 변경하여 취약성을 해결합니다.</p>
          <p>이 표를 사용하여 설치해야 할 수 있는 각 보안 업데이트에 대한 보안 공지 발표 후 30일 내 코드 실행 및 서비스 거부 악용 가능성에 대해 자세히 알아볼 수 있습니다. 이달의 업데이트 배포의 우선 순위를 정하려면 사용자의 특정 구성에 따라 아래의 각 평가를 검토하십시오. 이러한 등급의 의미와 등급이 결정되는 방법에 대한 자세한 내용은 Microsoft 악용 가능성 인덱스를 참조하십시오.</p>
        </Collapsible>
        <Collapsible trigger="Start here">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
      </div>
    );
  }
}

export default Context;
