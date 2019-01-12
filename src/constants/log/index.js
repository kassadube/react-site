import debug from 'debug';

const BASE = 'react-site';

const COLOURS = {
  trace: 'green',
  info: 'blue',
  warn: 'yellow',
  error: 'red'
}; 

const Log = (source) => {

    const namespace = `${BASE}:${source}`;
    const createDebug = debug(namespace);

    const trace = (message, args) => {
        createDebug.color = COLOURS.trace;
        
        return  args ? createDebug('trace',message, args): createDebug('trace',message);
      }

     const info =(message, args) => {
        createDebug.color = COLOURS.info;
        return  args ? createDebug('info',message, args): createDebug('info',message);
      }

      const warn = (message, args) => {
        createDebug.color = COLOURS.warn;
        return createDebug('warn',message, args)
      }
      const error = (message, args) => {
        createDebug.color = COLOURS.error;
        return createDebug('error',message, args)
      }

      return {trace, info, warn, error};

}
export default Log;