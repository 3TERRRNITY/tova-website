"use client"
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isDirty },
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

  const form = useRef<any>();

  const onSubmit = (e: any) => {
    emailjs
      .sendForm("service_9lobtdd", "template_uly0dx9", form.current, {
        publicKey: "W0rcqzYQdymcqkbza",
      })
      .then(
        () => {},
        (error) => {
          console.error("FAILED...", error.text);
        }
      ).finally(
        // @ts-ignore
        reset()
      );
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.title}>ОБСУДИТЬ ПРОЕКТ</div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
        className={styles.form}
      >
        <div className={styles.form__formContainer}>
          <InputWithSquare
            label="Имя"
            register={register}
            name="name"
            placeholder="Имя"
            error={errors.name}
          />
          <InputWithSquare
            label="Телефон"
            register={register}
            name="phone"
            placeholder="Телефон"
            error={errors.phone}
          />
          <InputWithSquare
            label="E-mail"
            register={register}
            name="email"
            placeholder="E-mail"
            error={errors.email}
          />
        </div>

        <div className={styles.form__formContainer}>
          <input {...register("company")} placeholder="Компания" type="text" />
          <textarea
            {...register("description")}
            placeholder="Описание задачи"
          />
        </div>
        <div className={styles.agreementContainer}>
          <div className={`${styles.checkboxContainer} ${errors.agree ? styles.shake : ""}`}>
            <input
              type="checkbox"
              {...register("agree", { required: "Это обязательное поле" })}
              className={`${styles.checkbox}`}
              id="agreeCheckbox"
            />
            <label htmlFor="agreeCheckbox">
              Я согласен с <span className={styles.underline}><a href="/privacy" target="_blank" className={styles.privacy}>правилами обработки персональных данных</a></span>
            </label>
          </div>
          <motion.button
            className={styles.agreementContainer__button}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ position: "relative", overflow: "hidden" }}
          >
            <motion.div
              initial={{
                width: 0,
                height: 0,
                background: "white",
                originX: 0,
                originY: 0,
              }}
              animate={{
                width: isHovered ? "200%" : 0,
                height: isHovered ? "200%" : 0,
                borderRadius: "50%",
                transition: { duration: 0.5 },
              }}
              style={{ position: "absolute", left: "-200px", bottom: "-20px" }}
            />
            <p
              style={{
                color: isHovered ? "black" : "white",
              }}
            >
              Отправить
            </p>
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Form;

const InputWithSquare = ({
  label,
  register,
  name,
  placeholder,
  error,
}: any) => {
  const [isFilled, setIsFilled] = useState(false);
  const handleInputChange = (e: any) => {
    setIsFilled(!!e.target.value);
  };

  return (
    <div className={`${styles.inputContainer} ${error ? styles.shake : ""}`}>
      <input
        {...register(name, { required: `Это обязательное поле` })}
        placeholder={placeholder}
        type="text"
        className={`${styles.input}`}
        onChange={handleInputChange}
      />
      <div className={`${styles.square} ${isFilled && styles.filled}`} />
    </div>
  );
};
