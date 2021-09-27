import React, { useCallback } from "react";
import NationalInsuranceComparer from "../../components/NationalInsuranceComparer";
import { Input } from "semantic-ui-react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { changeIncome } from "../../store/actions/nationalInsurance";
import _ from 'lodash'

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
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-weight: bold;
`

const Main = () => {
  const dispatch = useDispatch();

  const onChange = useCallback((value) => {
    dispatch(changeIncome(Number(value) ?? 0))
  }, [dispatch, changeIncome]) 

  const debouncedChange = _.debounce(onChange, 300)

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
          <StyledLabel for="income-per-annum-input" >Income Per Annum (£)</StyledLabel>
          <Input
            onChange={(_, { value }) => debouncedChange(value)}
            size="big"
            type="number"
            id="income-per-annum-input"
          />
        </InputContainer>
      </Container>
    </MainContainer>
  );
};

export default Main;
