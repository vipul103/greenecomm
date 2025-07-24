'use client';
import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "@components/error-message/error";

// Validation schema
const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(10).label("Phone"),
  suburb: Yup.string().required().label("Suburb"),
  preferredDate: Yup.string().required().label("Preferred Date"),
  resume: Yup.mixed().required("Resume file is required"),
  message: Yup.string().required().min(10).label("Any Queries"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, key === "resume" ? data[key][0] : data[key]);
      });

      await fetch('https://script.google.com/macros/s/AKfycbzbFBRLnRloxgP3zdR_0s4sUSXyRCzW7TeqVWq_Jmatj5iUs_nXLyT8Ux_XqCtU_Csv/exec', {
        method: 'POST',
        body: formData,
      });

      alert('Thank you for your submission!');
      reset();
      document.getElementById("file-name-preview").textContent = "";

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        {/* Name */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <label htmlFor="name">Full Name</label>
            <input
              name="name"
              {...register("name")}
              type="text"
              placeholder="Enter your name"
              id="name"
            />
            <ErrorMessage message={errors.name?.message} />
          </div>
        </div>

        {/* Email */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              id="email"
            />
            <ErrorMessage message={errors.email?.message} />
          </div>
        </div>

        {/* Phone */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <label htmlFor="phone">Mobile Number</label>
            <input
              name="phone"
              {...register("phone")}
              type="text"
              placeholder="Mobile no"
              id="phone"
            />
            <ErrorMessage message={errors.phone?.message} />
          </div>
        </div>

        {/* Suburb */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <label htmlFor="suburb">Suburb</label>
            <input
              name="suburb"
              {...register("suburb")}
              type="text"
              placeholder="Suburb"
              id="suburb"
            />
            <ErrorMessage message={errors.suburb?.message} />
          </div>
        </div>

        {/* Preferred Date */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <label htmlFor="preferredDate">Preferred Date</label>
            <input
              name="preferredDate"
              {...register("preferredDate")}
              type="date"
              id="preferredDate"
            />
            <ErrorMessage message={errors.preferredDate?.message} />
          </div>
        </div>

        {/* Resume Upload */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <label className="mb-2 d-block">Upload Resume</label>
            <label htmlFor="resume" className="upload-box">
              <span className="upload-label">
                <strong>Click to upload</strong> or drag & drop<br />
                <small>PDF, DOC, DOCX (Max 5MB)</small>
              </span>
              <input
                id="resume"
                type="file"
                {...register("resume")}
                accept=".pdf,.doc,.docx"
                className="hidden-file-input"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    document.getElementById("file-name-preview").textContent = file.name;
                  }
                }}
              />
            </label>
            <div id="file-name-preview" className="file-preview mt-1 text-sm text-dark"></div>
            <ErrorMessage message={errors.resume?.message} />
          </div>
        </div>

        {/* Message */}
        <div className="col-md-12">
          <div className="contact__input-2">
            <label htmlFor="message">Any Queries</label>
            <textarea
              name="message"
              {...register("message")}
              id="message"
              placeholder="Write your message here"
            ></textarea>
            <ErrorMessage message={errors.message?.message} />
          </div>
        </div>

        {/* Submit */}
        <div className="col-md-5">
          <div className="contact__btn-2">
            <button type="submit" className="tp-btn">
              Submit Resume
            </button>
          </div>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        .upload-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 2px dashed var(--tp-grey-15);
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          background-color: #f9f9f9;
          transition: border-color 0.3s;
        }

        .upload-box:hover {
          border-color: #999;
          background-color: #f1f1f1;
        }

        .upload-label {
          color: #666;
          font-size: 14px;
        }

        .hidden-file-input {
          display: none;
        }

        .file-preview {
          margin-top: 8px;
          color: #333;
          font-weight: 500;
        }

        label {
          font-weight: 600;
          display: block;
          margin-bottom: 6px;
          color: #333;
        }
      `}</style>
    </form>
  );
};

export default ContactForm;
