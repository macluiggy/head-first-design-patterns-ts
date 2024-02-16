public class IteratorEnumerator implements Enumeration<Object>{
  Iterator<?> iterator;

  public IteratorEnumerator(Iterator<?> iterator){
    this.iterator = iterator;
  }

  public boolean hasMoreElements() {
    return iterator.hasNext()
  }

  public Object nextElement() {
    return iterator.next();
  }

  public void remove() {
    throw new UnsupportedOperationException();
  }
}