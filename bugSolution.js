```javascript
// bug.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }, { id: 1, text: 'Item 3' }]; // Note the duplicate ID!

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.text}</Text>}
      // Incorrect keyExtractor - using the text property!
      keyExtractor={(item) => item.text} 
    />
  );
};

export default App;

```

```javascript
// bugSolution.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }, { id: 3, text: 'Item 3' }];

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.text}</Text>}
      // Correct keyExtractor - using the unique 'id' property
      keyExtractor={(item) => item.id.toString()} 
    />
  );
};

export default App;
```