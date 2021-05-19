/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import ReactNavigator from './js/navigators/reactNavigator';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <ReactNavigator />
    </ApplicationProvider>
  );
}
