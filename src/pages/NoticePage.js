import React from "react";
import PageTemplate from "components/common/PageTemplate";
import Context from "components/admin/Context";

const NoticePage = ({ match }) => {
  return (
    <PageTemplate>
      <Context />
    </PageTemplate>
  );
};

export default NoticePage;
