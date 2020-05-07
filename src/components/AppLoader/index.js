import React, { PureComponent } from 'react';
import { Spinner } from '@centrifuge/axis-spinner';

export default class AppLoader extends PureComponent {
  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          height: '100%',
          zIndex: '1001'
        }}
      >
        <Spinner />
      </div>
    );
  }
}
