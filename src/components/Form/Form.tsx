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
        () => {
          reset()
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      )
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
            type={'text'}
            name="name"
            placeholder="Имя"
            error={errors.name}
            reset={reset}
          />
          <InputWithSquare
            label="Телефон"
            register={register}
            name="phone"
            type={'tel'}
            placeholder="Телефон"
            error={errors.phone}
            reset={reset}
          />
          <InputWithSquare
            label="E-mail"
            register={register}
            name="email"
            type={'email'}
            placeholder="E-mail"
            error={errors.email}
            reset={reset}
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
  type,
  reset
}: any) => {
  const [isFilled, setIsFilled] = useState(false);
  const handleInputChange = (e: any) => {
    setIsFilled(!!e.target.value);
  };
  const [formattedPhone, setFormattedPhone] = useState("");

  const handleInputTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ""); 
    let formattedInput = "";
    setIsFilled(!!e.target.value);


    if (input.length > 0) {
      formattedInput += "+" + input.substring(0, 1);
    }
    if (input.length > 1) {
      formattedInput += " (" + input.substring(1, 4);
    }
    if (input.length > 4) {
      formattedInput += ") " + input.substring(4, 7);
    }
    if (input.length > 7) {
      formattedInput += "-" + input.substring(7, 9);
    }
    if (input.length > 9) {
      formattedInput += "-" + input.substring(9, 11);
    }

    setFormattedPhone(formattedInput);
    reset(); 
  };
  const handleFormSubmit = () => {
    reset(); 
  };
  if(type==="tel") {
    return (
      <div className={`${styles.inputContainer} ${error ? styles.shake : ""}`}>
      <input
        {...register(name, { required: `Это обязательное поле` })}
        placeholder={placeholder}
        type={type}
        value={formattedPhone}
        className={`${styles.input}`}
        onChange={type==="tel" ? handleInputTelChange : handleInputChange}
      />
      <div className={`${styles.square} ${isFilled && styles.filled} ${
          formattedPhone.length > 0 && styles.filled
        }`} />
    </div>
    )
  }
  return (
    <div className={`${styles.inputContainer} ${error ? styles.shake : ""}`}>
      <input
        {...register(name, { required: `Это обязательное поле` })}
        placeholder={placeholder}
        type={type}
        className={`${styles.input}`}
        onChange={handleInputChange}
      />
      <div className={`${styles.square} ${isFilled && styles.filled} ${
          formattedPhone.length > 0 && styles.filled
        }`} />
    </div>
  );
};
