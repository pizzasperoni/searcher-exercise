import React, { Component } from 'react';
import { css } from '@emotion/core';
// First way to import
import { BeatLoader } from 'react-spinners';

const override = css`
    display: flex;
    align-items:center;
    justify-content: center;
    margin-top: 200px;
    border-color: red;
`;

class Spinner extends Component {

  state = {
    loading: true
  }
  
  render() {
    return (
      <div className='sweet-loading'>
        <BeatLoader
          css={override}
          sizeUnit={"px"}
          size={40}
          color={'#ffe600'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default Spinner