import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для назначения консультации.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold text-primary">Kitchen Design</h1>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Обо мне
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90">
            Консультация
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary leading-tight">
              Дизайн кухни вашей мечты
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Создаю функциональные и стильные кухонные пространства, где каждая деталь продумана до мелочей. 
              Минимализм, чистые линии и максимум комфорта.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-accent hover:bg-accent/90">
                Бесплатная консультация
              </Button>
              <Button onClick={() => scrollToSection('portfolio')} size="lg" variant="outline">
                Смотреть работы
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary/80 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80" 
                alt="Современная кухня" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-lg shadow-xl">
              <p className="text-3xl font-heading font-bold">10+</p>
              <p className="text-sm">Лет опыта</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-primary mb-4">Портфолио</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Избранные проекты, воплощенные с любовью к деталям
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: 'photo-1556911220-bff31c812dba', title: 'Скандинавская кухня', desc: 'Минимализм и уют' },
              { img: 'photo-1556909212-d5b604d0c90d', title: 'Современная классика', desc: 'Элегантность в деталях' },
              { img: 'photo-1556909114-f6e7ad7d3136', title: 'Индустриальный стиль', desc: 'Лофт с характером' }
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={`https://images.unsplash.com/${project.img}?w=600&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-heading font-semibold text-primary mb-2">{project.title}</h4>
                <p className="text-muted-foreground">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-primary mb-4">Услуги</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный цикл работ от идеи до реализации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Pencil', title: 'Дизайн-проект', desc: 'Разработка концепции, 3D-визуализация, подбор материалов и оборудования' },
              { icon: 'Home', title: 'Планировка', desc: 'Оптимизация пространства с учетом эргономики и ваших потребностей' },
              { icon: 'Lightbulb', title: 'Авторский надзор', desc: 'Контроль качества на всех этапах реализации проекта' }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={service.icon as any} size={28} className="text-accent" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-primary mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gradient-to-br from-primary to-primary/80 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" 
              alt="Дизайнер" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-4xl font-heading font-bold text-primary">Обо мне</h3>
            <p className="text-muted-foreground leading-relaxed">
              Привет! Я — дизайнер кухонных интерьеров с более чем 10-летним опытом. 
              Моя специализация — создание минималистичных, функциональных пространств, 
              где каждый элемент имеет свое место и назначение.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Верю, что кухня — это сердце дома, место, где рождаются кулинарные шедевры 
              и собирается семья. Поэтому каждый проект для меня — возможность создать 
              не просто красивое, но и по-настоящему удобное пространство.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-3xl font-heading font-bold text-accent">150+</p>
                <p className="text-sm text-muted-foreground">Реализованных проектов</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-accent">98%</p>
                <p className="text-sm text-muted-foreground">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-primary mb-4">
              Бесплатная консультация
            </h3>
            <p className="text-muted-foreground">
              Запишитесь на встречу, и мы обсудим ваш проект
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg border border-gray-100 shadow-lg">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Ваше имя</label>
              <Input 
                required
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="h-12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Телефон</label>
              <Input 
                required
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="h-12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Расскажите о проекте</label>
              <Textarea 
                placeholder="Опишите ваши идеи и пожелания..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
              Записаться на консультацию
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-heading font-bold mb-4">Kitchen Design</h4>
            <p className="text-gray-300 text-sm">
              Дизайн кухонь премиум-класса с индивидуальным подходом
            </p>
          </div>
          <div>
            <h5 className="font-heading font-semibold mb-4">Контакты</h5>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (999) 123-45-67
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                hello@kitchendesign.ru
              </p>
            </div>
          </div>
          <div>
            <h5 className="font-heading font-semibold mb-4">Социальные сети</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          © 2024 Kitchen Design. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
