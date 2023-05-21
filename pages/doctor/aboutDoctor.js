import MyLayout from "./component/layout";

export default function aboutDoctor() {
  return (
    <>
      <MyLayout title="About" />
      <div className="bg-gray-100 py-28">
        <div className="container mx-auto px-4 lg:px-32">
          <h1 className="text-center text-2xl text-black font-bold mb-4">About Us</h1>
          <p className="text-lg text-justify text-gray-700 leading-7 mb-8">
            Our team of experienced doctors is dedicated to providing high-quality
            healthcare services to patients in need. With years of practice in the
            field of medicine, our doctors are experts in their respective
            specializations. At our clinic/hospital, patients can rely on our doctors&apos;
            expertise and compassion to help them achieve optimal health outcomes.
          </p>
          <p className="text-lg text-justify text-gray-700 leading-7 mb-8">
            Whether you&apos;re dealing with a minor ailment or a more serious illness, our
            doctors will work with you to develop a personalized treatment plan that
            meets your unique needs. In addition to their medical practice, our
            doctors are also actively involved in medical research and education.
            They have published numerous articles in leading medical journals and are
            frequent speakers at conferences and seminars.
          </p>
          <p className="text-lg text-gray-700 leading-7 mb-8">
            We are committed to providing the highest level of care to all patients,
            and our team of doctors looks forward to helping you achieve your health
            goals.
          </p>
        </div>
      </div>
    </>
  );
}
