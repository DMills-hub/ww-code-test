import React from "react";
import NationalInsuranceComparer from "../../components/NationalInsuranceComparer";
import { Input } from "semantic-ui-react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { changeIncome } from "../../store/actions/nationalInsurance";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  min-width: 400px;
`;

const InsuranceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  min-width: 400px;
  margin: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Main = () => {
  const dispatch = useDispatch();

  return (
    <MainContainer>
      <Container>
        <InsuranceContainer>
          <NationalInsuranceComparer title="2018/19" runDate="2018-04-06" />
          <NationalInsuranceComparer title="2019/20" runDate="2019-04-06" />
        </InsuranceContainer>
      </Container>
      <Container>
        <InputContainer>
          <Input
            onChange={(_, { value }) => dispatch(changeIncome(Number(value)))}
            size="big"
            label="Income (£)"
            type="number"
          />
        </InputContainer>
      </Container>
    </MainContainer>
  );
};

export default Main;
