import type {MDXComponents} from 'mdx/types';

/**
 * Use MDX Components
 *
 * @param {MDXComponents} components
 * @return {MDXComponents}
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
