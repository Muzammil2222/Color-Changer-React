import React from 'react';

const colors = [
  { id: 'Red', color: 'red' },
  { id: 'Green', color: 'green' },
  { id: 'Blue', color: 'blue' },
  { id: 'Purple', color: 'purple' },
  { id: 'Yellow', color: 'yellow' },
  { id: 'White', color: 'rgb(203, 213, 225)' },
  { id: 'Black', color: 'black' },
  { id: 'Orange', color: 'orange' },
  { id: 'Pink', color: 'rgb(219, 39, 119)' },
  { id: 'Gray', color: 'gray' },
  { id: 'Brown', color: 'brown' },
  { id: 'Magenta', color: 'magenta' },
  { id: 'Teal', color: 'teal' },
  { id: 'Lime', color: 'lime' },
];

function App() {
  const handleClick = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="all_button">
      {colors.map((btn) => (
        <button
          key={btn.id}
          id={btn.id}
          className="btn btn-primary"
          style={{ backgroundColor: btn.color, color: btn.color === 'yellow' || btn.color === 'lime' ? 'black' : 'white', borderColor: '1px solid black !important', borderRadius: '25px' }}
          onClick={() => handleClick(btn.color)}
        >
          {btn.id}
        </button>
      ))}
    </div>
  );
}

export default App;
