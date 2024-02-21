import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";

const Form = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      company: "",
      description: "",
      phone: "",
      email: "",
      agree: false,
    },
  });

  const onSubmit = (data: Record<string, any>) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className={styles.title}>ОБСУДИТЬ ПРОЕКТ</div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.form__formContainer}>
          <input
            {...register("name", { required: "Это обязательное поле" })}
            placeholder="Имя"
            type="text"
            className={errors.name ? styles.error : ""}
          />

          <input
            {...register("company", { required: "Это обязательное поле" })}
            placeholder="Компания"
            type="text"
            className={errors.company ? styles.error : ""}
          />

          <textarea
            {...register("description", { required: "Это обязательное поле" })}
            placeholder="Описание задачи"
            className={errors.description ? styles.error : ""}
          />
        </div>

        <div className={styles.form__formContainer}>
          <input
            {...register("phone", {
              required: "Это обязательное поле",
              minLength: { value: 10, message: "Минимум 10 символов" },
            })}
            placeholder="Телефон"
            type="tel"
            className={errors.phone ? styles.error : ""}
          />

          <input
            {...register("email", { required: "Это обязательное поле" })}
            placeholder="E-mail"
            type="email"
            className={errors.email ? styles.error : ""}
          />
        </div>
        <div className={styles.agreementContainer}>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              {...register("agree", { required: "Это обязательное поле" })}
              className={`${styles.checkbox}`}
              id="agreeCheckbox"
            />
            <label htmlFor="agreeCheckbox">
              Я согласен с правилами обработки персональных данных
            </label>
          </div>

          <button type="submit" className={styles.agreementContainer__button}>
            Отправить
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
