/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandWhatsapp,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "http://github.com.br",
    icon: <TbBrandGithub />,
  },
  {
    url: "http://github.com.br",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "http://github.com.br",
    icon: <TbBrandInstagram />,
  },
  {
    url: "http://github.com.br",
    icon: <TbBrandWhatsapp />,
  },
];

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-start pb-10 sm:pb-32 py-14 lg:pb-[110px] ">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg: max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá mey nome é</p>
          <h2 className="text-4xl font-medium mt-2">Efraim Fonseca</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado.
          </p>

          <div className="flex flex-wrap gap-y-3 gap-x-2 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="Next-Js" key={index} />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex flex-col sm:items-center sm:gap-5 sm:flex-row">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight />
            </Button>
            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.href}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil do Efraim"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[402px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  );
};
