import React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { Input } from "../Input";
import { cars, states } from "../TestComponents";
import { Select } from "../Select";

// import "../styles.css";

let renderCount = 0;

const defaultValues = [
  {
    attrKey: "CREATED_BY",
    attrDesc: null,
    attrLabel: "",
    dataElementId: "",
    isVisible: 1,
    isEditable: 1,
    isMandatory: 1,
    dataElementName: "",
    runTime: 0,
    isLookup: 0,
    lookUpId: "",
    runTimeValue: "",
  },
  {
    attrKey: "CREATED_ON",
    attrDesc: undefined,
    attrLabel: "",
    dataElementId: "",
    isVisible: 1,
    isEditable: 1,
    isMandatory: 1,
    dataElementName: "",
    runTime: 0,
    isLookup: 0,
    lookUpId: "",
    runTimeValue: "",
  },
  {
    attrKey: "PO_NUMBER",
    attrDesc: "",
    attrLabel: "",
    dataElementId: "",
    isVisible: 1,
    isEditable: 1,
    isMandatory: 1,
    dataElementName: "",
    runTime: 0,
    isLookup: 0,
    lookUpId: "",
    runTimeValue: "",
  },
];

function TestForm() {
  // control, handleSubmit, formState
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      test: defaultValues,
    },
  });
  const { fields, append, prepend, remove, swap, move, insert, replace } = useFieldArray({
    control,
    name: "test",
  });

  const onSubmit = (data) => console.log("data", data);

  // if you want to control your fields with watch
  // const watchResult = watch("test");
  // console.log(watchResult);

  // The following is useWatch example
  // console.log(useWatch({ name: "test", control }));

  renderCount++;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      <p>The following demo allow you to delete, append, prepend items</p>
      <span className="counter">Render Count: {renderCount}</span>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <Input
                root={`test.${index}`}
                control={control} // Mandatory - Passed from useForm
                name={"attrKey"} // Mandatory - Attribute from the default values
                rules={{ required: "This is a required field" }} // Optional -  Validation parameters
                errors={errors}
                placeholder="SMALL -  Input" // Optional - Any prop for Textfield.
                size={"small"} // Optional - Fully customisable
              />
              <Select root={`test.${index}`} control={control} name="attrDesc" rules={{ required: "Required sd" }} options={cars} optionKey="carId" optionLabel="type" placeholder="DEFAULT -  Select" errors={errors} />
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            append({ firstName: "appendBill", lastName: "appendLuo" });
          }}
        >
          append
        </button>
        <button
          type="button"
          onClick={() =>
            prepend({
              firstName: "prependFirstName",
              lastName: "prependLastName",
            })
          }
        >
          prepend
        </button>
        <button
          type="button"
          onClick={() =>
            insert(parseInt(2, 10), {
              firstName: "insertFirstName",
              lastName: "insertLastName",
            })
          }
        >
          insert at
        </button>

        <button type="button" onClick={() => swap(1, 2)}>
          swap
        </button>

        <button type="button" onClick={() => move(1, 2)}>
          move
        </button>

        <button
          type="button"
          onClick={() =>
            replace([
              {
                firstName: "test1",
                lastName: "test1",
              },
              {
                firstName: "test2",
                lastName: "test2",
              },
            ])
          }
        >
          replace
        </button>

        <button type="button" onClick={() => remove(1)}>
          remove at
        </button>

        <button
          type="button"
          onClick={() =>
            reset({
              test: [{ firstName: "Bill", lastName: "Luo" }],
            })
          }
        >
          reset
        </button>
      </section>

      <input type="submit" />
    </form>
  );
}
export default TestForm;
