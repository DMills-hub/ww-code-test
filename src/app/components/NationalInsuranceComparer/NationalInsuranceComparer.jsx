import React from "react";
import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";
import { useSelector } from "react-redux";
import { Header } from "semantic-ui-react";
import styled from "@emotion/styled";

const Paragraph = styled.p`
  font-size: 20px;
`;

const NationalInsuranceComparer = (props) => {
  const { runDate, title } = props;
  const income = useSelector((state) => state.nationalInsurance.income);
  const [{ data, loading }] = useAxios("v1/national-insurance", {
    method: "POST",
    headers: { "x-run-date": runDate },
    data: { income },
  });

  const nationalInsurance = data?.ni ?? 0;
  return (
    <div>
      <Header size="huge">{title}</Header>
      {loading && <p>Loading...</p>}
      {!loading && (
        <Paragraph>£{Number(nationalInsurance).toFixed(2)}</Paragraph>
      )}
    </div>
  );
};

NationalInsuranceComparer.propTypes = {
  runDate: PropTypes.string,
  title: PropTypes.string,
};

export default NationalInsuranceComparer;
