import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  padding: 16px;
  margin: 16px 0;
  border: 1px solid;
  color: #303741;
  border-color: #e8eaee;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
`;

const Code = styled.code`
  height: fit-content;
  background-color: #f7fafc;
  color: #2e3438e6;
  border: 1px solid #ecf4f9;
  border-radius: 3px;
  padding: 2px 5px;
  margin-bottom: 4px;
`;

const ForwardRefNote = () => (
  <Wrapper>
    The <Code>ref</Code> is forwarded to the root element.
  </Wrapper>
);

export default ForwardRefNote;
