'use client';

export default function Header() {
  return (
    <header style={{
      background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 10px 0px',
      position: 'sticky',
      top: '0px',
      zIndex: 100,
      margin: '0px',
      padding: '0px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
        maxWidth: '1200px',
        margin: '0px auto',
        boxSizing: 'border-box'
      }}>
        <div style={{margin: '0px', padding: '0px', boxSizing: 'border-box'}}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
            fontWeight: 600,
            color: 'rgb(51, 51, 51)',
            margin: '0px',
            padding: '0px',
            boxSizing: 'border-box'
          }}>
            <i style={{
              fontFamily: '"Font Awesome 6 Free"',
              fontWeight: 900,
              WebkitFontSmoothing: 'antialiased',
              display: 'flex',
              fontStyle: 'normal',
              fontVariant: 'normal',
              lineHeight: '16px',
              textRendering: 'auto',
              color: 'rgb(79, 195, 247)',
              marginRight: '8px',
              fontSize: '16px',
              background: 'rgb(79, 195, 247) none repeat scroll 0% 0% / auto padding-box border-box',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0px 8px 0px 0px',
              padding: '0px',
              boxSizing: 'border-box'
            }}></i>
            <a href="/" style={{
              fontWeight: 600,
              color: 'rgb(79, 195, 247)',
              position: 'relative',
              zIndex: 1,
              padding: '8px 16px',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'color 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              fontSize: '14.4px',
              whiteSpace: 'nowrap',
              margin: '0px',
              boxSizing: 'border-box'
            }}>
              <span style={{margin: '0px', padding: '0px', boxSizing: 'border-box'}}>Hire Hood</span>
            </a>
          </div>
        </div>
        
        {/* Dynamic Navigation */}
        <nav style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          background: 'rgba(255, 255, 255, 0.9) none repeat scroll 0% 0% / auto padding-box border-box',
          backdropFilter: 'blur(10px)',
          padding: '5px',
          borderRadius: '50px',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
          border: '0.666667px solid rgba(255, 255, 255, 0.3)',
          margin: '0px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            width: '71.5833px',
            transform: 'matrix(1, 0, 0, 1, 5.66669, 0)',
            opacity: 1,
            position: 'absolute',
            top: '5px',
            left: '0px',
            height: '53.5833px',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: '50px',
            transition: '0.3s cubic-bezier(0.25, 1, 0.5, 1)',
            zIndex: 0,
            pointerEvents: 'none',
            margin: '0px',
            padding: '0px',
            boxSizing: 'border-box'
          }}></div>
          
          <a href="https://www.hirehood.me" style={{
            fontWeight: 600,
            color: 'rgb(79, 195, 247)',
            position: 'relative',
            zIndex: 1,
            padding: '8px 16px',
            borderRadius: '50px',
            textDecoration: 'none',
            transition: 'color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            fontSize: '14.4px',
            whiteSpace: 'nowrap',
            margin: '0px',
            boxSizing: 'border-box'
          }}>Home</a>
          
          <a href="https://www.hirehood.me/jobs" style={{
            position: 'relative',
            zIndex: 1,
            padding: '8px 16px',
            borderRadius: '50px',
            color: 'rgb(51, 51, 51)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            fontSize: '14.4px',
            whiteSpace: 'nowrap',
            margin: '0px',
            boxSizing: 'border-box'
          }}>Jobs</a>
          
          <a href="/company-details" style={{
            position: 'relative',
            zIndex: 1,
            padding: '8px 16px',
            borderRadius: '50px',
            color: 'rgb(51, 51, 51)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            fontSize: '14.4px',
            whiteSpace: 'nowrap',
            margin: '0px',
            boxSizing: 'border-box'
          }}>Companies</a>
          
          <a href="https://www.hirehood.me/about" style={{
            position: 'relative',
            zIndex: 1,
            padding: '8px 16px',
            borderRadius: '50px',
            color: 'rgb(51, 51, 51)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            fontSize: '14.4px',
            whiteSpace: 'nowrap',
            margin: '0px',
            boxSizing: 'border-box'
          }}>About</a>
          
          <a href="https://www.hirehood.me/contact" style={{
            position: 'relative',
            zIndex: 1,
            padding: '8px 16px',
            borderRadius: '50px',
            color: 'rgb(51, 51, 51)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            fontSize: '14.4px',
            whiteSpace: 'nowrap',
            margin: '0px',
            boxSizing: 'border-box'
          }}>Contact</a>
          
          <a href="https://www.hirehood.me/faq" style={{
            position: 'relative',
            zIndex: 1,
            padding: '8px 16px',
            borderRadius: '50px',
            color: 'rgb(51, 51, 51)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            fontSize: '14.4px',
            whiteSpace: 'nowrap',
            margin: '0px',
            boxSizing: 'border-box'
          }}>FAQ</a>
          
          <a href="https://www.hirehood.me/login" style={{
            position: 'relative',
            zIndex: 1,
            padding: '8px 16px',
            borderRadius: '50px',
            color: 'rgb(51, 51, 51)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            fontSize: '14.4px',
            whiteSpace: 'nowrap',
            margin: '0px',
            boxSizing: 'border-box'
          }}>Login</a>
          
          <a href="https://www.hirehood.me/register" style={{
            borderRadius: '1584px',
            borderWidth: '2px',
            overflow: 'hidden',
            padding: '12.8px 48px',
            position: 'relative',
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
            appearance: 'button',
            backgroundColor: 'rgb(0, 0, 0)',
            backgroundImage: 'none',
            color: 'rgb(255, 255, 255)',
            cursor: 'pointer',
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            fontSize: '16px',
            fontWeight: 900,
            lineHeight: '24px',
            margin: '0px',
            maskImage: '-webkit-radial-gradient(center, rgb(0, 0, 0), rgb(255, 255, 255))',
            textTransform: 'uppercase',
            boxSizing: 'border-box',
            zIndex: 1,
            textDecoration: 'none',
            transition: 'color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap'
          }}>
            <span style={{
              mixBlendMode: 'difference',
              border: '0px solid rgb(255, 255, 255)',
              boxSizing: 'border-box',
              margin: '0px',
              padding: '0px'
            }}>Signup</span>
          </a>
        </nav>
        
        <div style={{
          display: 'none',
          flexDirection: 'column',
          cursor: 'pointer',
          gap: '4px',
          margin: '0px',
          padding: '0px',
          boxSizing: 'border-box'
        }}>
          <span style={{
            width: '25px',
            height: '3px',
            background: 'rgb(51, 51, 51) none repeat scroll 0% 0% / auto padding-box border-box',
            transition: '0.3s',
            borderRadius: '2px',
            margin: '0px',
            padding: '0px',
            boxSizing: 'border-box'
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            background: 'rgb(51, 51, 51) none repeat scroll 0% 0% / auto padding-box border-box',
            transition: '0.3s',
            borderRadius: '2px',
            margin: '0px',
            padding: '0px',
            boxSizing: 'border-box'
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            background: 'rgb(51, 51, 51) none repeat scroll 0% 0% / auto padding-box border-box',
            transition: '0.3s',
            borderRadius: '2px',
            margin: '0px',
            padding: '0px',
            boxSizing: 'border-box'
          }}></span>
        </div>
      </div>
    </header>
  );
}
