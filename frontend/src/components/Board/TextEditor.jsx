/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import ImageResize from 'quill-image-resize';
import 'react-quill/dist/quill.snow.css';

Quill.register('modules/imageUploader', ImageUploader);
Quill.register('modules/ImageResize', ImageResize);

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

          const reader = new FileReader();
          reader.onloadend = () => {
            console.log('잉');
            reader.readAsDataURL(file);
          };

          fetch('https://api.imgbb.com/1/upload?key=cea367bd14d89b37025dadd623500e7e', {
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
  const { inputRef } = props;

  return (
    <ReactQuill
      placeholder="내용을 적어보세요 ..."
      ref={inputRef}
      // onChange={(content, delta, source, editor) => onChange(editor.getHTML())}
      formats={formats}
      modules={modules}
      theme="snow"
    />
  );
};

TextEditor.propTypes = {
  inputRef: PropTypes.element.isRequired,
};

export default TextEditor;
