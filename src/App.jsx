import { useState, useEffect, useRef } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [result, setResult] = useState('');
  const [input, setInput] = useState(''); 
  const [activeKey, setActiveKey] = useState(null);
  const inputRef = useRef(null);

  const inputProcess = (num) => {
    const MAX_LENGTH = 50;
    setInput((prev) => {
      if (prev.length >= MAX_LENGTH) return prev;
      return prev + num;
    });
  };

  const processResult = () => {
    try {
      const calculate = evaluate(input);
      if (Math.abs(calculate) > 1e10) {
        setResult('Too large!');
        return;
      }

      setResult(calculate);

    } catch (error) {
      setResult('Error!');
    }
  };

  const clearResult = () => {
    setInput('');
    setResult('');
  };

  const deleteNumber = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollLeft = inputRef.current.scrollWidth;
    }
  }, [input]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if (key === 'Enter' || key === '=') {
        setActiveKey('=');
        processResult();
      } else if (/^[0-9+\-*/().]$/.test(key)) {
        setActiveKey(key);
        inputProcess(key);
      } else if (key === 'Backspace') {
        setActiveKey('DEL');
        deleteNumber();
      } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        setActiveKey('C');
        clearResult();
      }

      setTimeout(() => setActiveKey(null), 150);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input]);

  const calculatorInput = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="grid place-items-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col justify-center items-center bg-white rounded shadow-md p-5 w-full max-w-sm">

        {/* Display */}
        <div
          ref={inputRef}
          className="bg-gray-50 w-full px-4 py-3 rounded mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide touch-auto"
        >
          {/* Expression */}
          <div className="text-right text-gray-500 text-2xl font-semibold tracking-wide mb-1" title={input}>
            {input || '0'}
          </div>

          {/* Result */}
          <div className="text-right text-4xl font-bold text-black font-mono">
            {result !== '' && result !== 'Error!' && result !== 'Too large!'
              ? result.toLocaleString()
              : result}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2 w-full">
          {calculatorInput.map((num) => (
            <button
              key={num}
              className={`bg-blue-200 p-4 rounded text-xl font-semibold hover:bg-blue-300 active:scale-95 transition
                ${activeKey === num ? 'ring-2 ring-blue-500 scale-95' : ''}`}
              onClick={() => num === '=' ? processResult() : inputProcess(num)}
            >
              {num}
            </button>
          ))}
          <button
            onClick={clearResult}
            className={`col-span-2 bg-yellow-200 p-4 rounded text-xl font-semibold hover:bg-yellow-300
              ${activeKey === 'C' ? 'ring-2 ring-yellow-500 scale-95' : ''}`}
          >
            C
          </button>
          <button
            onClick={deleteNumber}
            className={`col-span-2 bg-red-200 p-4 rounded text-xl font-semibold hover:bg-red-300
              ${activeKey === 'DEL' ? 'ring-2 ring-red-500 scale-95' : ''}`}
          >
            DEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
