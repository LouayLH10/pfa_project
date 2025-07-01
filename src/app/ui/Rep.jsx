import React from 'react';

function Rep({ id, questionIndex, refs, handleChange }) {
  const renderInputs = (fields) => {
    return fields.map((field) => (
      <div key={field.id} className={`relative z-0 w-full mb-5 group ${field.index >= 3 ? "md:w-1/2 md:inline-block md:px-2" : ""}`}>
        <input
          ref={field.ref}
          type={field.type}
          name={field.name}
          id={field.id}
          className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resp ${field.className || ''}`}
          defaultValue={field.defaultValue}
          placeholder=" "
          onChange={(e) => handleChange(e,field.questionIndex, field.responseId)}
          data-question-index={field.questionIndex}
          data-response-id={field.responseId}
          required
        />
        <label
          htmlFor={field.id}
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
        >
          {field.label}
        </label>
      </div>
    ));
  };

  return (
    <div className="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700 rep">
      <input
        id={`radio-${questionIndex}-${id}`}
        type="radio"
        name={`bordered-radio-${questionIndex}`}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={(e) => handleChange(e, questionIndex, id, true)}
      />

      <label
        htmlFor={`radio-${questionIndex}-${id}`}
        className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {renderInputs([
          { 
            id: `response_input-${questionIndex}-${id}`,
            name: `response_${questionIndex}_${id}`,
            label: `Réponse ${id + 1}`, 
            type: "text", 
            className: "no-spinner",
            ref: refs?.responses?.[id]?.ref || React.createRef(),
            questionIndex: questionIndex,
            responseId: id,
            index: id
          },
        ])}
      </label>
    </div>
  );
}

export default Rep;