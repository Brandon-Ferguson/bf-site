import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const LogoImg = styled(LazyLoadImage)`
  width: 45%;
  vertical-align: middle;
  border-style: none;
  padding-top: 0px;
`

export const LogoContainer = styled.div`
  padding-left: 1px;
  padding-right: 1px;
`