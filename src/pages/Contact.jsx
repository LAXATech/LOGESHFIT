import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        goal: 'Fat Loss',
        message: ''
    });
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', phone: '', email: '', goal: 'Fat Loss', message: '' });
            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    return (
        <Section background="dark" className="pt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        LET'S <span className="text-accent">TALK</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Ready to take the next step? Fill out the form below or reach out directly. I'll get back to you within 24 hours.
                    </p>

                    <div className="space-y-6 mb-8">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent border border-gray-800">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                                <p className="font-medium">coach@logeshfit.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent border border-gray-800">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">WhatsApp</p>
                                <p className="font-medium">+91 98765 43210</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-accent/10 rounded-sm border border-accent/20">
                        <h3 className="text-accent font-bold mb-2">Not sure yet?</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Book a free 15-minute discovery call to see if we're a good fit.
                        </p>
                        <Button href="https://calendly.com" variant="primary" className="w-full text-center justify-center">
                            Book Discovery Call
                        </Button>
                    </div>
                </div>

                <div className="bg-secondary p-8 rounded-sm border border-gray-800 relative">
                    {isSuccess ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary z-10 p-8 text-center animate-fade-in">
                            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                                <Check size={32} className="text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-gray-400">Thanks for reaching out. I'll be in touch shortly.</p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="mt-6 text-accent text-sm font-bold hover:underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : null}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full bg-primary border rounded-sm px-4 py-3 text-base text-white focus:outline-none focus:border-accent transition-colors ${errors.name ? 'border-red-500' : 'border-gray-700'}`}
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full bg-primary border rounded-sm px-4 py-3 text-base text-white focus:outline-none focus:border-accent transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-700'}`}
                                    placeholder="+91..."
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full bg-primary border rounded-sm px-4 py-3 text-base text-white focus:outline-none focus:border-accent transition-colors ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
                                placeholder="john@example.com"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Goal</label>
                            <select
                                name="goal"
                                value={formData.goal}
                                onChange={handleChange}
                                className="w-full bg-primary border border-gray-700 rounded-sm px-4 py-3 text-base text-white focus:outline-none focus:border-accent transition-colors"
                            >
                                <option>Fat Loss</option>
                                <option>Muscle Gain</option>
                                <option>General Fitness</option>
                                <option>Competition Prep</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full bg-primary border rounded-sm px-4 py-3 text-base text-white focus:outline-none focus:border-accent transition-colors h-32 ${errors.message ? 'border-red-500' : 'border-gray-700'}`}
                                placeholder="Tell me about your current routine..."
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>
                        <Button type="submit" variant="primary" className="w-full justify-center" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Application'}
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
