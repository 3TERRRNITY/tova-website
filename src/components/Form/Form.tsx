import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";

const Form = () => {
  const {
    handleSubmit,
    register,
    resetField,

    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      company: "",
      description: "",
      phone: "",
      email: "",
      agree: "",
    },
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        resetField("name");
        resetField("company");
        resetField("description");
        resetField("phone");
        resetField("email");
        resetField("agree");
      })}
      className={styles.form}
    >
      <div className={styles.form__formContainer}>
        <input
          {...register("name", { required: "Это обязательное поле" })}
          defaultValue=""
          placeholder="Имя"
        />
        <p>{errors.name?.message?.toString()}</p>
        <input
          {...register("company", { required: "Это обязательное поле" })}
          defaultValue=""
          placeholder="Компания"
        />
        <p>{errors.company?.message?.toString()}</p>
        <textarea
          {...register("description", { required: "Это обязательное поле" })}
          defaultValue=""
          placeholder="Описание задачи"
        />
        <p>{errors.description?.message?.toString()}</p>
      </div>

      <div className={styles.form__formContainer}>
        <input
          {...register("phone", {
            valueAsNumber: true,
            required: "Это обязательное поле",
            minLength: 10,
          })}
          defaultValue=""
          placeholder="Телефон"
          type="phone"
        />
        <p>{errors.phone?.message?.toString()}</p>
        <input
          {...register("email", { required: "Это обязательное поле" })}
          defaultValue=""
          placeholder="E-mail"
          type="email"
        />
        <p>{errors.email?.message?.toString()}</p>
      </div>
      <label>
        <input
          type="checkbox"
          defaultValue=""
          {...register("agree", { required: "Это обязательное поле" })}
        />
        Я согласен с <a>правилами обработки персональных данных</a>
      </label>

      <p>{errors.agree?.message?.toString()}</p>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
