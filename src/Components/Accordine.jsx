


import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import './styles/Main.css';

import {
  FaRegCheckSquare,
  FaPaintBrush,
  FaRegImage,
  FaUser,
  FaBell,
  FaEllipsisV,
  FaChevronLeft,
  FaChevronRight,
  FaMedal,
  FaPalette,
  FaRegTrashAlt,
  FaEdit,
} from 'react-icons/fa';
import { FlagContext } from './ContextProvider';

const Accordine = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [list, setList] = useState([]);
  const [full, setFull] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [color, setColor] = useState('white');
  const [filteredList, setFilteredList] = useState([]);

  console.log(list);

  const paintRef = useRef();
  const titleRef = useRef();

  const { isFlag, filterItemName } = useContext(FlagContext);
  console.log(filterItemName);

  // Function to close the form and add a new item to the list or save edits
  function close() {
    if (!title || !desc) {
      // If title or desc is empty, return without adding to the list
      alert('Every field is required');
      return;
    }

    if (isEdit && editIndex !== null) {
      // If in edit mode, update the existing item at the specified index
      setList((prevList) => {
        const newArr = [...prevList];
        newArr[editIndex] = {
          titleName: title,
          descName: desc,
        };
        return newArr;
      });

      // Reset edit mode and editIndex
      setIsEdit(false);
      setEditIndex(null);
    } else {
      // If not in edit mode, add a new item to the list
      let newItem = {
        titleName: title,
        descName: desc,
      };
      setList((prevList) => [...prevList, newItem]);
    }

    // Clear input fields after adding to the list or saving edits
    setTitle('');
    setDesc('');
    setFull(false);
  }

  // Function to remove an item from the list
  function remove(index) {
    const newArr = [...list];
    newArr.splice(index, 1);
    setList(newArr);
  }

  // Function to initiate the editing of an item
  function edit(index) {
    // Set the editIndex and populate the input fields with the values of the selected item
    setEditIndex(index);
    setIsEdit(true);
    setFull(true);
    setTitle(list[index].titleName);
    setDesc(list[index].descName);
  }

  // Function to save edits during edit mode
  function save() {
    // Update the existing item at the specified index
    setList((prevList) => {
      const newArr = [...prevList];
      newArr[editIndex] = {
        titleName: title,
        descName: desc,
      };
      return newArr;
    });

    // Reset edit mode and editIndex
    setIsEdit(false);
    setEditIndex(null);

    // Clear input fields after saving edits
    setTitle('');
    setDesc('');
    setFull(false);
  }

  function divColor(index, selectedColor) {
    // Update the color of the item at the specified index
    setList((prevList) => {
      const newList = [...prevList];
      newList[index] = {
        ...newList[index],
        color: selectedColor,
      };
      return newList;
    });
  }

  useEffect(() => {
    // Use a separate variable to store the filtered list
    let filteredList = list.filter((v, i) =>
      v.titleName.toLowerCase().includes(filterItemName.toLowerCase())
    );

    // Update the state with the filtered list
    setFilteredList(filteredList);
  }, [filterItemName, list]);

  return (
    <div style={{ textAlign: 'center' }}>
      <div className='cord'>
        <div className='aTop' onClick={() => setFull(!full)}>
          <div>
            <div>Take Notes..</div>
          </div>
          <div className='item'>
            <div>
              <FaRegCheckSquare />
            </div>
            <div>
              <FaPaintBrush />
            </div>
            <div>
              <FaRegImage />
            </div>
          </div>
        </div>
        {full && (
          <div className='aBot'>
            <div>
              <input
                className='inputTitle'
                type='text'
                name=''
                id=''
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title'
                value={title}
              />
            </div>
            <textarea
              className='inputDesc'
              name=''
              id=''
              cols='30'
              rows='3'
              onChange={(e) => setDesc(e.target.value)}
              placeholder='Take notes....'
              value={desc}
            ></textarea>
            <div className='items-main'>
              {/* ... (unchanged) */}

              <div data-tip='Notification' >
                <FaBell />
              </div>
              <div data-tip='User' className='b1'>
                <FaUser />
              </div>
              <div data-tip='Palette'>
                <FaPalette />
              </div>
              <div data-tip='Medal' className='b1'>
                <FaMedal />
              </div>
              <div data-tip='Image' className='b1'>
                <FaRegImage />
              </div>
              <div data-tip='Options'>
                <FaEllipsisV />
              </div>
              <div data-tip='Previous' className='b1'>
                <FaChevronLeft />
              </div>
              <div data-tip='Next'className='b1'>
                <FaChevronRight />
              </div>

              {isEdit ? (
                <div className='button-18' onClick={save}>
                  Save
                </div>
              ) : (
                <div className='button-18' onClick={close}>
                  Close
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className={isFlag ? 'listDiv' : 'GridDiv'}>
        {filteredList.map((v, i) => (
          <div
            className={isFlag ? 'list-item' : 'Grid-item'}
            key={i}
            style={{ backgroundColor: v.color }}
          >
            <div style={{ fontSize: '1.2rem' }}>{v.titleName}</div>
            <div style={{ textOverflow: 'ellipsis' }}>{v.descName}</div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginTop: '20px',
              }}
              className='childItem'
            >
              <div className='aa'>
                <FaBell />
              </div>
              <div className='aa'>
                <FaUser />
              </div>

              <div class='color-picker-container'>
                <input
                  type='color'
                  class='color-input'
                  id='colorInput'
                  onChange={(e) => divColor(i, e.target.value)}
                />
                <label for='colorInput' class='palette-icon'>
                  <FaPalette />
                </label>
              </div>

              <div className='aa'>
                <FaMedal />
              </div>
              <div>
                <FaRegImage />
              </div>
              <div className='aa'>
                <FaEllipsisV />
              </div>
              <div>
                <FaRegTrashAlt
                  className='delete'
                  onClick={() => remove(i)}
                />
              </div>
              <div>
                <FaEdit className='delete' onClick={() => edit(i)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordine;
