import React, { useEffect, useState } from 'react';
import data from './data';

import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import QuillEditor, { QuillToolbar } from 'react-native-cn-quill';



export default function App() {
  const _editor = React.createRef();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log('data',data);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="auto" />
      <QuillEditor
          webview={{
            nestedScrollEnabled: true,
          }}
          style={[styles.input, styles.editor]}
          ref={_editor}
          onHtmlChange={({ html }) => console.log(html)}
          quill={{
            // not required just for to show how to pass this props
            placeholder: 'this is placeholder',
            modules: {
              toolbar: false, // this is default value
            },
            theme: 'snow', // this is default value
          }}
        
          customJS={`
          var ListItem = Quill.import('formats/list/item');
          class PlainListItem extends ListItem {
            formatAt(index, length, name, value) {
              if (name === 'list') {
                // Allow changing or removing list format
                super.formatAt(name, value);
              }
              // Otherwise ignore
            }
          }
          
          Quill.register(PlainListItem, true);
            
          `}
          import3rdParties="cdn" // default value is 'local'
          initialHtml={`<p>${data.title}</p>`}
        //   initialHtml="<h1>Quill Editor for react-native</h1><img src='https://picsum.photos/200/300'/><br/><p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>"
        />


     
      <QuillToolbar editor={_editor} options="full" theme="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#eaeaea',
  },
  editor: {
    flex: 1,
    padding: 0,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 30,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#eaeaea',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 30,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  textbox: {
    height: 40,
    paddingHorizontal: 20,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 10,
    margin: 3,
  },
});