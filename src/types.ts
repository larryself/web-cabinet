import React from 'react';

export type Operator = {
  id: number | undefined;
  name: string;
  logo: string;
};
export type FormData = {
  phoneNumber: string;
  amountPay: string;
  operatorName: string;
  logo: string;
};
export type OperatorProps = {
  logo: string;
  name: string;
};
export type ImgProps = {
  logo: string;
  width: string;
  height: string;
  alt: string;
};
export type PayPageProps = {
  operator: Operator;
};
export type WrapperProps = {
  children: React.ReactNode;
};
export type InputProps = {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  className?: string | undefined;
  endValue?: string | null;
};
export type IndexProps = {
  operators: [Operator];
};
