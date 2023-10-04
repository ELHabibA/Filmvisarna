import { createElement, useState } from 'react';

const bootstrapClassDict = {
    'input': 'form-control shadow-none',
    'select': 'form-select shadow-none',
    'button': 'btn btn-primary float-end px-4',
    'label': 'col-md-6 col-xl-4 mb-4 p-3'
};

export function useFormHelper(options = {}) {

    // add defaults to options (if not set in options)
    options = Object.assign({
        required: true,
        autoComplete: 'on',
        type: 'text',
        maxLength: 50,
    }, options);

    const [formState, setFormState] = useState({});
    const [formIsValid, setFormIsValid] = useState(false);

    // simpify creation and validation of form elements
    function createInputElement(
        element, name, placeholder, extras = {}, childEl = null
    ) {
        // remember error function, then remove it from extras
        let error = extras.error || (() => { });
        delete extras.error;
        // delete 'nolabel' flage, then remove i from extras
        let nolabel = extras.nolabel;
        delete extras.nolabel;
        // create a form element
        let inputElement = createElement(element, {
            key: name,
            name,
            placeholder,
            value: formState[name] || '',
            onChange({ target: t }) {
                // set custom validation error message
                t.setCustomValidity(error(t.value) || '');
                // update state
                setFormState({ ...formState, [t.name]: t.value });
                // update if form is valid to send
                setFormIsValid(t.closest('form').matches(':valid'));
            },
            // options and extra attributes/overrides
            ...options,
            ...extras,
            className: (extras.className || '') + ' '
                + (bootstrapClassDict[element] || '')
        }, childEl);

        if (nolabel) { return inputElement; }

        // wrap the form element in a label 
        // with some extra spans and return
        return createElement(
            'label',
            {
                key: 'label_ ' + name,
                className: bootstrapClassDict.label
            },
            createElement('span',
                { className: 'd-block mb-1' }, placeholder),
            inputElement,
            createElement('div', {
                className: 'invalid-feedback',
                onClick({ target: t }) {
                    t.previousElementSibling.reportValidity();
                }
            })
        );
    }

    return {
        formState,
        setFormState,
        formIsValid,
        createInputElement
    };
}