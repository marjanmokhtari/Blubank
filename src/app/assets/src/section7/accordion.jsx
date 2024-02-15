import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';  

export default function AccordionUsage() {
    return (
        <section className=' lg:px-20 flex flex-wrap *:w-full'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    چگونه می‌توانم حساب بازکنم؟
                </AccordionSummary>
                <AccordionDetails>
                    مراحل بازکردن حساب : ١.دانلود و نصب اپلیکیشن بلو ٢.داشتن یک خط تلفن همراه فعال که به نام خودتان است ٣.همراه داشتن اصل کارت ملی (برای کارت ملی‌های قدیمی، کد رهگیری درخواست صدور کارت هوشمند) برای ارسال تصاویر مربوطه
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    برای بازکردن حساب چه مدارکی لازم است؟
                </AccordionSummary>
                <AccordionDetails>
                    اصل کارت ملی (برای کارت ملی‌های قدیمی، کد رهگیری درخواست صدور کارت هوشمند) برای ارسال تصاویر مربوطه و داشتن یک خط تلفن همراه فعال که به نام خودتان است.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    من کارت ملی هوشمند دریافت نکرده‌ام، آیا می‌توانم حساب بازکنم؟
                </AccordionSummary>
                <AccordionDetails>
                    بله، اگر درخواست کارت ملی هوشمند را ثبت کردید، از راه ثبت کد رهگیری نوشته شده روی رسید ثبت‌نام کارت ملی هوشمند، امکان بازکردن حساب را دارید.
                </AccordionDetails>

            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    من کارت ملی هوشمند ندارم و برگه رسید کارت ملی هوشمند را گم کرده‌ام، چطور می‌توانم حساب بازکنم؟
                </AccordionSummary>
                <AccordionDetails>
                    در وب‌سایت سازمان ثبت و احوال کد رهگیری کارت ملی خود را پیداکنید و فرآیند بازکردن حساب را انجام دهید.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    مراحل بازکردن حساب چقدر زمان می‌برد؟
                </AccordionSummary>
                <AccordionDetails>
                    باز کردن حساب در کمتر از ۷ دقیقه، بررسی مدارک، شناسایی هویت و فعال شدن حساب(در صورت تایید استعلام بانک مرکزی) حداکثر تا ۳ روز انجام می‌شود.
                </AccordionDetails>
            </Accordion>
            <button className=' text-[#4b94ea] flex justify-end my-4' >سوالات بیشتر...</button>
        </section>
    );
}