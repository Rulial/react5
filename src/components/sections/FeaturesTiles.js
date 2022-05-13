import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'STORY DAO',
    paragraph: 'Decentralising high end CGI/ VFX Production by introducing an autonomous and modular pipeline to unlock true potential for talent, managers and clients.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/EHP01.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    MODULATION
                    </h4>
                  <p className="m-0 text-sm">
                     An end to end project management + communation tool organizing movement of talent and digital assets across teams. Managing complexity of the secure autonomous processes for everyone to collaborate and focus on their tasks.
                    </p>
                </div>
              </div>
            </div>
           
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/SWUMP01.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    DEX
                    </h4>
                  <p className="m-0 text-sm">
                    We are not reinventing the wheel but putting rubber on it, a motor behind it for the ability to absorb pressure on difficult roads. Our ability to provide long term financial value for everyone within the ecosystem makes us refreshing.
                    </p>
                </div>
              </div>
            </div>
 <div className="tiles-item reveal-from-bottom">
     <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/hex01.JPEG')}
                      alt="Features tile icon 01"
                      width={264}
                      height={164} />
                  </div>
              </div>
            <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Current Project
                    </h4>
                  <p className="m-0 text-sm">
                     we design and tell stories from our imagination to your reality
                    </p>
                </div>
       </div>
   </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;