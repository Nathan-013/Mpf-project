'use client'

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronRight, Play, PlayIcon } from 'lucide-react';

export default function Question() {
  return (
    <Accordion.Root className='flex flex-col gap-3' type="single" defaultValue="item-0" collapsible>
      <Accordion.Item className="text-zinc-200 font-semibold text-base lg:text-lg" value="item-1">
        <Accordion.Trigger className='flex gap-1 AccordionTrigger py-2'>
          <ChevronRight strokeWidth={2.25} className="AccordionChevron" aria-hidden />
          <span>É possível só com o E-book começar no mercado financeiro?</span>
        </Accordion.Trigger>
        <Accordion.Content className="AccordionContent text-base font-normal ml-10">
          O E-book irá abrir sua mente para você iniciar no mercado financeiro.
          Te dando toda a base que você precisa, ensinando desde os padrões até o momento certo de entrar.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item className="text-zinc-200 font-semibold text-base lg:text-lg" value="item-2">
        <Accordion.Trigger className='flex gap-1 AccordionTrigger py-2'>
          <ChevronRight strokeWidth={2.25} className="AccordionChevron" aria-hidden />
          <span>Como é a consultoria?</span>
        </Accordion.Trigger>
        <Accordion.Content className="AccordionContent text-base font-normal ml-10">
          A consultoria é pra você que já tem uma certa experiência, mas não tem assertividade e precisa melhorar o operacional.
          Iremos te ajudar a afiar as ideias e melhorar sua visão de mercado.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item className="text-zinc-200 font-semibold text-base lg:text-lg" value="item-3">
        <Accordion.Trigger className='flex gap-1 AccordionTrigger py-2'>
          <ChevronRight strokeWidth={2.25} className="AccordionChevron" aria-hidden />
          <span>Como é a mentoria?</span>
        </Accordion.Trigger>
        <Accordion.Content className="AccordionContent text-base font-normal ml-10">
          A mentoria são aulas individuais, onde não existe enrolação, é assunto direto e reto, pra você com as primeiras aulas, já saber fazer dinheiro simples, rápido e prático.
        </Accordion.Content>

      </Accordion.Item>



    </Accordion.Root>
  )
}