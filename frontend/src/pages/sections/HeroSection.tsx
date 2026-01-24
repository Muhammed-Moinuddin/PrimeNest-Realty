import { Search, MapPin, Home, DollarSign, MousePointer2 } from 'lucide-react';
import PropertyImage from '../../assets/primenest-property-image-1.png';

function HeroSection() {
  return (
    <section className="bg-light py-14 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-24 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Content */}
          <div className="space-y-6">
            
            {/* Badge - Happy Clients */}
            <div className="inline-flex items-center gap-3 bg-light-200 rounded-2xl px-6 py-3 shadow-sm">
              {/* Overlapping Avatar Images */}
              <div className="flex -space-x-2">
                <img className='w-8 h-8 rounded-full border-2 border-white flex items-center justify-center object-cover' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop" alt="" />    
                <img className='w-8 h-8 rounded-full border-2 border-white flex items-center justify-center object-cover' src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&auto=format&fit=crop" alt="" />    
                <img className='w-8 h-8 rounded-full border-2 border-white flex items-center justify-center object-cover' src="https://images.unsplash.com/photo-1583692331507-fc0bd348695d?fm=jpg&q=60&w=3000&auto=format&fit=crop" alt="" />    
                <img className='w-8 h-8 rounded-full border-2 border-white flex items-center justify-center object-cover' src="https://plus.unsplash.com/premium_photo-1708275672423-837db6d3d700?q=80&w=735&auto=format&fit=crop" alt="" />    
              </div>
              {/* Text */}
              <span className="text-dark font-medium">
                <span className="font-bold">26k+</span> Happy Clients
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark font-heading leading-tight">
              Find Your Perfect{' '}
              <span className="inline-block text-light bg-dark px-4 py-2 my-2 rounded-2xl">Dream Home <div className="w-3 h-3 bg-brand rounded-full inline-block ml-1"></div></span>
            </h1>

            {/* Description */}
            <p className="text-lg text-dark-100 leading-relaxed">
              Browse through our curated collection of premium properties in prime locations. 
              Your perfect home is just a search away.
            </p>

            {/* Search Bar */}
            <div className="bg-light-200 rounded-2xl p-4 flex flex-col md:flex-row gap-2">
              
              {/* Location Input */}
              <div className="flex items-center gap-2 flex-1 px-4 py-3 bg-light rounded-xl">
                <MapPin className="text-dark-100 flex-shrink-0" size={20} />
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-transparent outline-none text-dark w-full"
                />
              </div>

              {/* Property Type Select */}
              <div className="flex items-center gap-2 flex-1 px-4 py-3 bg-light rounded-xl">
                <Home className="text-dark-100 flex-shrink-0" size={20} />
                <select className="bg-transparent outline-none text-dark w-full cursor-pointer">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="villa">Villa</option>
                </select>
              </div>

              {/* Price Range Select */}
              <div className="flex items-center gap-2 flex-1 px-4 py-3 bg-light rounded-xl">
                <DollarSign className="text-dark-100 flex-shrink-0" size={20} />
                <select className="bg-transparent outline-none text-dark w-full cursor-pointer">
                  <option value="">Price Range</option>
                  <option value="0-200k">$0 - $200k</option>
                  <option value="200k-400k">$200k - $400k</option>
                  <option value="400k-600k">$400k - $600k</option>
                  <option value="600k+">$600k+</option>
                </select>
              </div>

              {/* Search Button */}
              <button className="bg-dark hover:text-brand text-light px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 shadow-glow">
                <Search size={20} />
                <span className="hidden md:inline">Search</span>
              </button>
            </div>
            {/* <div className="absolute top-4 left-4 w-24 h-24 bg-brand rounded-full opacity-80 blur-2xl">
              <span>Hello</span>
            </div> */}
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img 
                src={PropertyImage}
                alt="Dream Home" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative floating element above for 1440px */}
            <div className="hidden 2xl:flex absolute top-20 -left-28 items-center justify-center">
              <div className=' bg-dark rounded-xl px-6 py-2'><span className='text-light'>Starting from AED 2.4M</span></div>  <MousePointer2 className='scale-x-[-1] mb-10' fill="currentColor" stroke="currentColor"/>
            </div>
            <div className="hidden 2xl:flex absolute bottom-40 -right-16 items-center justify-center">
              <MousePointer2 className='scale-y-[-1] mt-10' fill="currentColor" stroke="currentColor"/><div className=' bg-dark rounded-xl px-6 py-2'><span className='text-light'>Starting from $6M</span></div>
            </div>

            {/* Decorative floating element below for 1440px */}
            <div className="2xl:hidden flex absolute left-4 items-center justify-center">
              <div className=' bg-dark rounded-xl px-6 py-2'><span className='text-light'>Starting from $ 6M</span></div>  <MousePointer2 className='scale-x-[-1] mb-10' fill="currentColor" stroke="currentColor"/>
            </div>
            <div className="2xl:hidden flex absolute -top-16 right-0 items-center justify-center">
              <MousePointer2 className='scale-y-[-1] mt-10' fill="currentColor" stroke="currentColor"/><div className=' bg-dark rounded-xl px-6 py-2'><span className='text-light'>Starting from AED 2.4M</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;