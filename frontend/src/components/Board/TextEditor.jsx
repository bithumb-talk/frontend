import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import ImageResize from 'quill-image-resize';

Quill.register('modules/imageUploader', ImageUploader);
Quill.register('modules/ImageResize', ImageResize);

/* const fileRef = React.createRef(); */
/* function imageHandler() {
   fileRef.current.click();
  console.log('custom image handler');
}
 */
const TextEditor = (props) => {
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'background',
    'code',
  ];
  const modules = {
    toolbar: {
      container: [
        [{ header: [3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image'],
      ],
      /* handlers: {
        image: imageHandler,
      }, */
    },
    imageUploader: {
      upload: (file) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append('image', file);

          fetch('https://api.imgbb.com/1/upload?key=d36eb6591370ae7f9089d85875e56b22', {
            method: 'POST',
            body: formData,
          })
            .then((response) => response.json())
            .then((result) => {
              resolve(result.data.url);
            })
            .catch((error) => {
              // eslint-disable-next-line prefer-promise-reject-errors
              reject('Upload failed');
              // eslint-disable-next-line no-console
              console.error('Error:', error);
            });
        }),
    },
    ImageResize: {
      parchment: Quill.import('parchment'),
    },
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  /*
  const [imgBase64, setImgBase64] = useState(''); // 파일 base64
  const [imgFile, setImgFile] = useState(null); // 파일

  const handleChangeFile = (event) => {
    console.log('실행');
    const reader = new FileReader();
    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
        console.log('!!!!!', imgBase64);
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
      console.log(imgFile);
    }
  }; */
  const { onChange, content, name } = props;
  return (
    <>
      {/* <input type="file" ref={fileRef} onChange={handleChangeFile} hidden multiple /> */}
      <ReactQuill
        name={name}
        placeholder="내용을 적어보세요 ..."
        value={content}
        onChange={onChange}
        formats={formats}
        modules={modules}
      />
    </>
  );
};

TextEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TextEditor;
