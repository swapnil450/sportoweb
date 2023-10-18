import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function About() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("5xl");

  const sizes = ["5xl"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      {sizes.map((size) => (
        <Button
          key={size}
          className="bg-trasparent text-white"
          size="sm"
          onPress={() => handleOpen(size)}
        >
          About Us
        </Button>
      ))}

      <Modal
        size={size}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={"inside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                About Us!
              </ModalHeader>
              <ModalBody>
                <h2 className="text-3xl font-semibold text-center mb-4">
                  About Us
                </h2>
                <article className="text-sm text-black">
                  <p>Welcome to soilboostertechnology!</p>
                  <p>
                    At soilboostertechnology, we are passionate about helping plants
                    thrive and supporting farmers in their quest for healthy and
                    abundant crops. Our e-commerce website offers a wide range
                    of premium-quality fertilizers, plant medicines, pesticides,
                    fungicides, and cow feed and medicines. With our Smart Soil
                    Booster Technology, we aim to revolutionize the way you care
                    for your plants and cultivate your farm.
                  </p>
                  <h3 className="text-xl font-semibold mt-4">Our Products:</h3>
                  <ol className="list-decimal list-inside pl-4">
                    <li>
                      <strong>Fertilizers:</strong> We provide a diverse
                      selection of fertilizers formulated to enhance soil
                      fertility and promote optimal plant growth. Whether you
                      need nutrients for specific plants or want an all-purpose
                      fertilizer, we have you covered.
                    </li>
                    <li>
                      <strong>Plant Medicines:</strong> Our plant medicines are
                      designed to prevent and treat various diseases,
                      deficiencies, and stresses that plants may encounter. From
                      boosting immunity to improving overall plant health, our
                      products ensure your plants stay vigorous and productive.
                    </li>
                    <li>
                      <strong>Pesticides and Fungicides:</strong> Protecting
                      your crops from pests and diseases is crucial for
                      maximizing yields. We offer a range of effective and safe
                      pesticides and fungicides that combat harmful insects,
                      pathogens, and fungi, ensuring your plants remain healthy
                      and pest-free.
                    </li>
                    <li>
                      <strong>Cow Feed and Medicines:</strong> We understand the
                      importance of healthy livestock for a thriving farm. Our
                      cow feed and medicines are formulated to provide essential
                      nutrients and promote the well-being of your cattle.
                    </li>
                  </ol>
                  <h3 className="text-xl font-semibold mt-4">
                    Smart Soil Booster Technology:
                  </h3>
                  <p>
                    At SoilBooster, we believe that the key to successful
                    farming lies in optimizing soil health. Our Smart Soil
                    Booster Technology combines innovative solutions and
                    scientific advancements to create a comprehensive approach
                    to soil management. By leveraging this technology, farmers
                    can achieve improved crop quality, increased yields, and
                    sustainable agricultural practices.
                  </p>
                  <h3 className="text-xl font-semibold mt-4">
                    Why Choose soilboostertechnology:
                  </h3>
                  <ol className="list-decimal list-inside pl-4">
                    <li>
                      <strong>Quality Assurance:</strong> We source our products
                      from trusted manufacturers and ensure that they meet the
                      highest quality standards. Your plants and livestock
                      deserve the best, and we strive to deliver superior
                      products.
                    </li>
                    <li>
                      <strong>Expert Advice:</strong> Our team consists of
                      experienced agronomists and agricultural experts who are
                      dedicated to providing you with personalized guidance and
                      support. We are here to answer your questions and help you
                      make informed decisions.
                    </li>
                    <li>
                      <strong>Convenient Shopping:</strong> With our
                      user-friendly e-commerce platform, you can easily browse
                      through our extensive product catalog, place orders, and
                      have them delivered right to your doorstep. Shopping for
                      agricultural inputs has never been easier.
                    </li>
                  </ol>
                  <h3 className="text-xl font-semibold mt-4">Contact Us:</h3>
                  <p>
                    We value your feedback and are always ready to assist you.
                    For any inquiries or assistance, please reach out to us at
                    soilbooster@717gmail.in. You can also contact our office at
                    +91 9822688926 or +91 9730866263. We are located in Nashik,
                    Maharashtra, India, and look forward to serving you.
                  </p>
                  <p>
                    At soilboostertechnology.com, we are committed to empowering farmers,
                    nurturing plants, and promoting sustainable agriculture.
                    Join us on this journey to create healthier and more
                    productive farms.
                  </p>
                </article>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
