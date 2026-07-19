import React from "react";
import { Pagination as AntPagination } from "antd";

function Pagination({
  current,
  total,
  onChange,
}) {
  return (
    <AntPagination
      current={current}
      total={total}
      pageSize={20}
      showSizeChanger={false}
      onChange={onChange}
      style={{
        textAlign: "center",
        marginTop: 40,
      }}
    />
  );
}

export default Pagination;