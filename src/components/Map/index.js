import React, { Component } from 'react';
import { loadModules } from 'esri-loader';
import Data from '../../utils/data'


class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            building : []
        }
    }

    // component should only ever render once, and then not update.  
    // all map actions should come via prop changes
    // that trigger esri/arcgis methods inside componentWillReceiveProps
    componentWillUpdate() {
        return false;
    };

    
    componentWillReceiveProps(nextProps) {
   
    };

    homeWidget = (e) => {
       
         this.props.setDashboard("close");
        
    };

    // function to init/load map.  This is called when component mounts
    // map is only ever rendered once
    loadMap() {
        return loadModules(['esri/Map', 'esri/views/MapView', 'esri/Basemap', 'esri/widgets/BasemapGallery', "esri/widgets/BasemapToggle", 'esri/widgets/Search', 'esri/widgets/Home', 'esri/widgets/Expand', 'esri/layers/TileLayer', 'esri/layers/FeatureLayer', 'esri/widgets/Slider', "esri/widgets/Legend", "esri/widgets/DistanceMeasurement2D", "esri/layers/ImageryLayer", "esri/layers/support/RasterFunction", "esri/widgets/Measurement"])
            .then(([Map, MapView, Basemap, BasemapGallery, BasemapToggle, Search, Home, Expand, TileLayer, FeatureLayer, Slider, Legend, DistanceMeasurement2D, ImageryLayer, RasterFunction, Measurement]) => {
                
                const topomap = new TileLayer({
                    url: Data.mapUrl,
                });

                const imagery = new TileLayer({
                    url: Data.imageryUrl,
                    minScale: 36112
                });


                const defaultBasemap = new Basemap({
                    baseLayers: [topomap],
                    title: "RARR Basemap ",
                    id: "RARR Basemap"
                });

                const map = new Map({
                    basemap: defaultBasemap
                });
                
                const view = new MapView({
                    container: "viewDiv",
                    map: map,
                    center: [-80.840132, 35.225296],
                    zoom: 14,
                    // popup: {
                    //     dockEnabled: true,
                    //     visible: false,
                    //     dockOptions: {
                    //         buttonEnabled: false,
                    //         breakpoint: false,
                    //         position: "auto"
                    //     }
                    // }
                });

               
                const RARRBuildingsLayer = new FeatureLayer({
                    url: Data.rarrBuildingUrl,
                    visible: true,
                    outFields: ["*"],
                    id: "rarrbuildingsLayer"
                });
                map.add(RARRBuildingsLayer);

                const search = new Search({
                    view: view,
                    container: document.createElement("div")
                });

                const bgExpand = new Expand({
                    view: view,
                    content: search
                });
                view.ui.add(bgExpand, "top-left");

                view.ui.move("zoom", "top-left");

                //home customized to close all opend modals and set the zoom level to the intial value
                const homeBtn = new Home({
                    viewModel: {
                        view: view
                    },

                }, "homeWidget");
                view.ui.add(homeBtn, "top-left");

                homeBtn.viewModel.on("go", function (e) {
                   

                });
                
                const basemapGallery = new BasemapGallery({
                    view: view
                });
                // Create an Expand instance and set the content
                const expandBmap = new Expand({
                    expandIconClass: "esri-icon-basemap",
                    view: view,
                    content: basemapGallery
                });
                view.ui.add(expandBmap, "top-left");
                const legend = new Legend({
                    view: view,
                    layerInfos: [
                        {
                            layer: RARRBuildingsLayer,
                            title: "Risk Score"
                        }
                    ]
                });

                const expand = new Expand({
                    expandIconClass: "esri-icon-layer-list",
                    view: view,
                    content: legend
                });
                view.ui.add(expand, "top-left");
                view.on("click", function (evt) {
                    const screenPoint = evt.screenPoint;
                    
                    view.hitTest(evt)
                        .then(getGraphics)
    
                });
    
                const getGraphics = (respose) => {
    
                    const graphic = respose.results[0].graphic;
                    const attributes = graphic.attributes;
                    this.props.setGraphics(attributes)
                    this.props.setDashboard("open");
                }
                         
                // return () => {
                //     if (view) {
                //         // destroy the map view
                //         view.container = null;
                //     }
                // };
    

                // return components of map that need to respond to user interaction
                let mapReturn = {
                    map: map,
                    mapView: view,
                    mapRARRBuildingsLayer: RARRBuildingsLayer,
                }
                return mapReturn;

            })
    }


    // when component mounts, load map, map return values available to class methods
    // and add click watcher
    componentDidMount() {
        
        this.loadMap()
    }
    
    render() {

        return (
            <div className="mapLayer" >
                <div
                    className="full-screen-map"
                    style={{ width: '100vw', height: '100%' }}
                    id="viewDiv"
                />
                <div id="homeWidget" onClick={this.homeWidget} />
            
            </div>
        )

    }

}
export default Map;